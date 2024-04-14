import * as THREE from 'three'

export function boxCreator(materialType, color, posX, posY, posZ, width, height, depth) {
    var boxShape = new THREE.BoxGeometry(width, height, depth);

    var material

    switch(materialType) {
        case "Phong":
            material = new THREE.MeshPhongMaterial({
                color: color
            })
            break;
        case "Lambert":
            material = new THREE.MeshLambertMaterial({
                color: color
            })
            break;
        case "Basic":
            material = new THREE.MeshLambertMaterial({
                color: color
            })
            break;
        default:
            throw new Error('materialType is either not defined or has an incorrect type value.')
    }
    
    var boxMesh = new THREE.Mesh(boxShape, material)

    boxMesh.position.x = posX
    boxMesh.position.y = posY
    boxMesh.position.z = posZ

    return boxMesh
}