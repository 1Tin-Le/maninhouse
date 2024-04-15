import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { character, settingMeshes, mixer } from './meshAdditions.js'
import {keyListeners} from './keyListeners.js'

const renderer = new THREE.WebGLRenderer({antialias: false})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

export const scene = new THREE.Scene();

    const color = 0xffffff;
    const intensity = 3;
    const light = new THREE.DirectionalLight( color, intensity );
    light.position.set( 5, 0, 4 );
    scene.add( light );

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

const controls = new OrbitControls(camera, renderer.domElement)

camera.position.set(10, 10, 10);
controls.update();
// end boilerplate

export const loader = new GLTFLoader;

// load the character and meshes
character()
settingMeshes()
keyListeners()

camera.position.z = 5;

const clock = new THREE.Clock();
function animate() {
    // setTimeout sets fps using variable "fpsCap", default 30
    let fpsCap = 1000/30
    setTimeout(function () {

    requestAnimationFrame(animate);

    }, fpsCap)
    controls.update();
    if(mixer)
    mixer.update(clock.getDelta())

    renderer.render(scene, camera)
}

// allows for the resizing of the canvas
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
})

animate()