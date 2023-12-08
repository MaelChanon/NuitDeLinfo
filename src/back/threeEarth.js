import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";
import data from "./bootstrap"
import {updateInterface,getHtmlTemplate} from './ihm'
/** 
 * Base
 */
// Debug
const gui = new dat.GUI({
  width: 390,
});

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//Textures
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("/textures/map-4818844_1280.jpg");

const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const material = new THREE.MeshBasicMaterial( { 
map :earthTexture } ); 
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

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
camera.position.x = 3;
camera.position.y = 30;
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();
  sphere.rotation.y = elapsedTime * 0.1;
  //sphere.rotation.z = -elapsedTime * 0.01;


  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
  updateInterface(data.earth)
};
console.log(data)
tick();


/**
 * 
 * 
 * 
 * 
 * 
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
document.getElementById("data").appendChild(getHtmlTemplate(data.config,categorieClick))
setInterval(repeat,1000)
function categorieClick(event){
  const factory = data.factoryFactory.newFactory(event.target.parentNode.getAttribute('id'))
  if(data.earth.addFactory(factory)){
    console.log("ouiiiiiiiiiiii")
  }
  else{
    console.log("noooooononono")
  }
  const FactoryList = data.earth.getFactoryList(factory)
  console.log(`#${factory} .factory_title`)
  const child = document.querySelector(`#${event.target.parentNode.getAttribute('id')} .factory_title`)
  console.log(child)
}
function repeat(){
  if(data.earth.tick()){
    console.log("mort")
  }
  console.log("non")
}