import * as THREE from 'three';

/*
    Some resources

    https://threejs.org/examples/#webgl_loader_gltf
*/

import { MTLLoader } from 'src/lib/threejs/MTLLoader.js';
import { OBJLoader } from 'src/lib/threejs/OBJLoader.js';
import { OrbitControls } from 'src/lib/threejs/OrbitControls.js';

export const init = (node) => {
    let camera, scene, renderer;

    const render = () => {
        renderer.render( scene, camera );
    }

    const init = () => {
        const rect = node.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( width, height );
        node.appendChild( renderer.domElement );

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.addEventListener( 'change', render ); // use if there is no animation loop
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.target.set( 0, 0, - 0.2 );
        controls.update();
    }

    init();
    render();

}
