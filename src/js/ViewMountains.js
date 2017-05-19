// ViewMountains.js

import alfrid, { GL } from 'alfrid';

import vs from 'shaders/floor.vert';
import fs from 'shaders/mountains.frag';
import Assets from './Assets';

class ViewMountains extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		this.mesh = new alfrid.Mesh();

		const positions = [];
		const uvs = [];
		const indices = [];
		let count = 0;

		const numX = 24;
		const numY = 1;
		const radius = 60;
		const height = 60;

		const getPosition = function(i, j) {
			const a = i/numX * Math.PI * 2.0;
			const x = Math.cos(a) * radius;
			const z = Math.sin(a) * radius;
			const y = -height/2 + j/numY * height + 3.5;

			return [x, y, z];
		}

		for(let i=0; i<numX; i++) {
			for(let j=0; j<numY; j++) {
				positions.push(getPosition(i, j));
				positions.push(getPosition(i+1, j));
				positions.push(getPosition(i+1, j+1));
				positions.push(getPosition(i, j+1));

				uvs.push([i/numX, j/numY]);
				uvs.push([(i+1)/numX, j/numY]);
				uvs.push([(i+1)/numX, (j+1)/numY]);
				uvs.push([i/numX, (j+1)/numY]);

				indices.push(count * 4 + 0);
				indices.push(count * 4 + 1);
				indices.push(count * 4 + 2);
				indices.push(count * 4 + 0);
				indices.push(count * 4 + 2);
				indices.push(count * 4 + 3);

				count ++;
			}
		}

		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoord(uvs);
		this.mesh.bufferIndex(indices);
	}

	render() {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		Assets.get('mountains').bind(0);
		this.shader.uniform("colorMap", "uniform1i", 1);
		Assets.get('color-map').bind(1);
		GL.draw(this.mesh);
	}


}

export default ViewMountains;