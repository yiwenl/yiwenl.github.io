// ViewFloor.js

import alfrid, { GL } from 'alfrid';
import vs from 'shaders/floor.vert';
import fs from 'shaders/floor.frag';
import NoiseMap from './NoiseMap';

class ViewFloor extends alfrid.View {
	
	constructor() {
		super(vs, fs);
	}


	_init() {
		const size = 50;
		const numSeg = GL.isMobile ? 20 : 50;
		this.mesh = alfrid.Geom.plane(size, size, numSeg, 'xz');

		this._noiseMap = new NoiseMap();

		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		
	}


	render() {
		this.shader.bind();
		this._noiseMap.texture.bind(0);
		this.shader.uniform(params.camera);
		GL.draw(this.mesh);
	}


}

export default ViewFloor;