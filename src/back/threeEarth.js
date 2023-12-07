import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";

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
sphere.rotation.x = 0.63
sphere.rotation.y = -1.78
scene.add( sphere );

/**
 * Sizes
 */
function getSizeOfDiv(divId) {

  if (divId) {
    const width = divId.offsetWidth;
    const height = divId.offsetHeight;

    return { width, height };
  } else {
    console.error("La div avec l'ID spécifié n'a pas été trouvée.");
    return null;
  }
}
const divSize = getSizeOfDiv(canvas);
const sizes = {
  width: divSize.width,
  height: divSize.height,
};

window.addEventListener("resize", () => {
  // Update sizes
  const divSize = getSizeOfDiv(canvas);
  sizes.width = divSize.width;
  sizes.height = divSize.height;

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
camera.position.z = 30;
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
  sphere.rotation.y = elapsedTime * 0.2;


  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
