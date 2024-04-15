import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { scene, loader } from './index.js'
import { boxCreator } from './boxCreator.js'

export var mixer
// ^^^ points/stores the model in here

export function character() {
    loader.load(
        // ^^^ begins to load other stuff while loading this, aka asynchronous.
            `public/animationsGLTF/characterIdlePlusWalkTEST.glb`,
            function (gltf) {
                const model = gltf.scene
                scene.add(model)
                mixer = new THREE.AnimationMixer(model)
                const clips = gltf.animations
                const clip = THREE.AnimationClip.findByName(clips, 'Idle')
                const action = mixer.clipAction(clip)
                action.play()
            },
            // why is the thing below a thing??
            undefined,
            function (error) {
                console.error(error)
            }
        )
}
export function settingMeshes() {
loader.load(
    `public/artGalleryColored.glb`,
    function (gltf) {
        const model = gltf.scene
        model.name = 'artGallery'
        model.traverse(function (child) {
            if (child instanceof THREE.Mesh)
            child.material = new THREE.MeshLambertMaterial({color: '#42d1f5'})
        })
        model.scale.set(3, 3, 3)
        scene.add(model)
    }
)

scene.add(boxCreator("Lambert", "#32a852", 0, -7.5, 0, 12, 12, 12))

}