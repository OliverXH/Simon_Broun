import * as THREE from './three.js';

export default class FenceBufferGeometry {
    constructor(_width, _height, _depth) {
        this.width = _width;
        this.height = _height;
        this.depth = _depth;

        this.fence = new THREE.BufferGeometry();

        this.length = 8;

        this.vertices = new Float32Array(this.length * 3)
        this.uvs = new Uint32Array(this.length * 2)
        this.indices = new Uint32Array(this.length * 6)

        this.create();
    }

    create() {
        // Vertices
        this.vertices[0 * 3 + 0] = this.width * 0.5
        this.vertices[0 * 3 + 1] = this.height * 0.5
        this.vertices[0 * 3 + 2] = 0

        this.vertices[1 * 3 + 0] = this.width * 0.5
        this.vertices[1 * 3 + 1] = - this.height * 0.5
        this.vertices[1 * 3 + 2] = 0

        this.vertices[2 * 3 + 0] = - this.width * 0.5
        this.vertices[2 * 3 + 1] = - this.height * 0.5
        this.vertices[2 * 3 + 2] = 0

        this.vertices[3 * 3 + 0] = - this.width * 0.5
        this.vertices[3 * 3 + 1] = this.height * 0.5
        this.vertices[3 * 3 + 2] = 0

        this.vertices[4 * 3 + 0] = this.width * 0.5
        this.vertices[4 * 3 + 1] = this.height * 0.5
        this.vertices[4 * 3 + 2] = this.depth

        this.vertices[5 * 3 + 0] = this.width * 0.5
        this.vertices[5 * 3 + 1] = - this.height * 0.5
        this.vertices[5 * 3 + 2] = this.depth

        this.vertices[6 * 3 + 0] = - this.width * 0.5
        this.vertices[6 * 3 + 1] = - this.height * 0.5
        this.vertices[6 * 3 + 2] = this.depth

        this.vertices[7 * 3 + 0] = - this.width * 0.5
        this.vertices[7 * 3 + 1] = this.height * 0.5
        this.vertices[7 * 3 + 2] = this.depth

        // Uvs
        this.uvs[0 * 2 + 0] = 0
        this.uvs[0 * 2 + 1] = 0

        this.uvs[1 * 2 + 0] = 1 / 3
        this.uvs[1 * 2 + 1] = 0

        this.uvs[2 * 2 + 0] = 1 / 3 * 2
        this.uvs[2 * 2 + 1] = 0

        this.uvs[3 * 2 + 0] = 1
        this.uvs[3 * 2 + 1] = 0

        this.uvs[4 * 2 + 0] = 0
        this.uvs[4 * 2 + 1] = 1

        this.uvs[5 * 2 + 0] = 1 / 3
        this.uvs[5 * 2 + 1] = 1

        this.uvs[6 * 2 + 0] = 1 / 3 * 2
        this.uvs[6 * 2 + 1] = 1

        this.uvs[7 * 2 + 0] = 1
        this.uvs[7 * 2 + 1] = 1

        // Index
        this.indices[0 * 3 + 0] = 0
        this.indices[0 * 3 + 1] = 4
        this.indices[0 * 3 + 2] = 1

        this.indices[1 * 3 + 0] = 5
        this.indices[1 * 3 + 1] = 1
        this.indices[1 * 3 + 2] = 4

        this.indices[2 * 3 + 0] = 1
        this.indices[2 * 3 + 1] = 5
        this.indices[2 * 3 + 2] = 2

        this.indices[3 * 3 + 0] = 6
        this.indices[3 * 3 + 1] = 2
        this.indices[3 * 3 + 2] = 5

        this.indices[4 * 3 + 0] = 2
        this.indices[4 * 3 + 1] = 6
        this.indices[4 * 3 + 2] = 3

        this.indices[5 * 3 + 0] = 7
        this.indices[5 * 3 + 1] = 3
        this.indices[5 * 3 + 2] = 6

        this.indices[6 * 3 + 0] = 3
        this.indices[6 * 3 + 1] = 7
        this.indices[6 * 3 + 2] = 0

        this.indices[7 * 3 + 0] = 4
        this.indices[7 * 3 + 1] = 0
        this.indices[7 * 3 + 2] = 7

        // Set this.indices
        this.fence.setIndex(new THREE.BufferAttribute(this.indices, 1, false))

        // Set attributes
        this.fence.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
        this.fence.setAttribute('uv', new THREE.Float32BufferAttribute(this.uvs, 2))

        return this.fence;
    }

}