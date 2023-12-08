import * as THREE from "three";
import data from "./bootstrap"

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//Textures
const textureLoader = new THREE.TextureLoader();
const starTexture = textureLoader.load("/textures/star_08.png");
const earthTexture = textureLoader.load("/textures/map-4818844_1280.jpg");

//Earth
const geometrySphere = new THREE.SphereGeometry( 15, 32, 16 ); 
const materialSphere = new THREE.MeshBasicMaterial( { map :earthTexture } ); 
const sphere = new THREE.Mesh( geometrySphere, materialSphere );
sphere.rotation.x = 0.63
sphere.rotation.y = -1.78
scene.add( sphere );

/**
 * Galaxy
 */
const parameters = {};
parameters.count = 1000;
parameters.size = 2.5;
parameters.radius = 500;
parameters.branches = 3;
parameters.spin = 1;
parameters.randomness = 20;
parameters.randomnessPower = 2.6;

let geometry = null;
let material = null;
let points = null;

const generateGalaxy = () => {

//   /**
//    * Geometry
//    */
  geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(parameters.count * 3);

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;

    // Position
    const radius = Math.random() * parameters.radius; //la distance entre le centre et le point le plus éloigné (rayon)
    const spinAngle = radius * parameters.spin; //la rotation autour du centre
    const brancheAngle =
      ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius; //le random de la position en x (randomPower pour que les points soient plus proches du centre)
    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;

    positions[i3] = Math.cos(brancheAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(brancheAngle + spinAngle) * radius + randomZ;

  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//   /**
//    * Material
//    */
  material = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    transparent: true,
    alphaMap: starTexture,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    color: "white"
  });

  /**
   * Points
   */
  points = new THREE.Points(geometry, material);
  scene.add(points);
};

generateGalaxy();

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 50;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/*
*Function
*/
canvas.addEventListener("click", (event) => {
  // Coordonnées du clic de la souris
  const mouseX = (event.clientX / sizes.width) * 2 - 1;
  const mouseY = -(event.clientY / sizes.height) * 2 + 1;

  // Raycasting
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(mouseX, mouseY);
  raycaster.setFromCamera(mouse, camera);

  // Intersections avec la sphère
  const intersects = raycaster.intersectObject(sphere);

  // Si la sphère est cliquée
  if (intersects.length > 0) {
    // Faites quelque chose ici, par exemple changez la couleur de la sphère
    data.earth.click();
    console.log(data.earth.getGold())
  }
}); 

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  
  sphere.rotation.y = elapsedTime * 0.2;
  points.rotation.y = elapsedTime * 0.1;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};
console.log(data)
tick();

setInterval(repeat,1000)

function repeat(){
  if(data.earth.tick()){
    console.log("mort")
  }
  console.log("non")
}