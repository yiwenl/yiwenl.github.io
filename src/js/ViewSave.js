// ViewSave.js

import alfrid from 'alfrid';

const vsSave = require('../shaders/save.vert');
const fsSave = require('../shaders/save.frag');
const GL = alfrid.GL;
const random = function (min, max) { return min + Math.random() * (max - min);	};

class ViewSave extends alfrid.View {
	
	constructor() {
		super(vsSave, fsSave);
	}


	_init() {
		let positions = [];
		let coords = [];
		let indices = []; 
		let extras = [];
		let count = 0;

		let numParticles = params.numParticles;
		let totalParticles = numParticles * numParticles;
		console.debug('Total Particles : ', totalParticles);
		let ux, uy;
		let range = 3;

		const m = mat4.create();

		function getPos() {
			let r = 1.0 - Math.sin(Math.random() * Math.PI * 0.5) * 10;
			// r = Math.pow(r, 3.0) * 3;
			let v = vec3.fromValues(0, 0, r);
			mat4.identity(m, m);
			mat4.rotateX(m, m, Math.random() * Math.PI * 2);
			mat4.rotateY(m, m, Math.random() * Math.PI * 2);
			mat4.rotateZ(m, m, Math.random() * Math.PI * 2);
			vec3.transformMat4(v, v, m);
			v[1] *= 0.2;
			v[1] += 4;

			return v;
		}

		for(let j = 0; j < numParticles; j++) {
			for(let i = 0; i < numParticles; i++) {
				// positions.push([random(-range, range), random(-range, range), random(-range, range)]);
				positions.push(getPos());

				ux = i / numParticles * 2.0 - 1.0 + .5 / numParticles;
				uy = j / numParticles * 2.0 - 1.0 + .5 / numParticles;

				extras.push([Math.random(), Math.random(), Math.random()]);
				coords.push([ux, uy]);
				indices.push(count);
				count ++;

			}
		}


		this.mesh = new alfrid.Mesh(GL.POINTS);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(coords);
		this.mesh.bufferIndex(indices);

		this.meshExtra = new alfrid.Mesh(GL.POINTS);
		this.meshExtra.bufferVertex(extras);
		this.meshExtra.bufferTexCoord(coords);
		this.meshExtra.bufferIndex(indices);
	}


	render(state = 0) {
		this.shader.bind();
		if(state === 0) {
			GL.draw(this.mesh);	
		} else if(state === 1) {
			GL.draw(this.meshExtra);	
		}
		
	}


}

export default ViewSave;