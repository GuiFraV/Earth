import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

const canvas = document.querySelector('canvas.webgl')

const sizes = {
    height: window.innerHeight,
    width: window.innerWidth
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ canvas : canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height)

const geometry = new THREE.IcosahedronGeometry(1, 8);
const loader = new THREE.TextureLoader();
const material = new THREE.MeshStandardMaterial({
    map: loader.load("./earthmap1k.jpg")
});
const cube = new THREE.Mesh(geometry, material)
scene.add(cube);

const light = new THREE.HemisphereLight();
scene.add( light );

new OrbitControls(camera, canvas)

window.addEventListener('rezise', () => {


    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height

    renderer.setSize( sizes.width , sizes.height)
})


function animate(){
    window.requestAnimationFrame(animate)

    cube.rotation.x += 0.001;
    cube.rotation.y += 0.002;

    renderer.render(scene, camera)
}

animate()