import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')

const sizes = {
    height: window.innerHeight,
    width: window.innerWidth
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ canvas : canvas });
renderer.setSize(sizes.width, sizes.height)

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0xfffff00});
const cube = new THREE.Mesh(geometry, material)
scene.add(cube);

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );


window.addEventListener('rezise', () => {


    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height

    renderer.setSize( sizes.width , sizes.height)
})


function animate(){
    window.requestAnimationFrame(animate)

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera)
}

animate()