import alfrid, { GL } from 'alfrid';
import fs from 'shaders/noise.frag';

class NoiseMap {
	
	constructor() {
		this._init();
		this.reset();
	}


	_init() {
		this.mesh = alfrid.Geom.bigTriangle();
		this.shader = new alfrid.GLShader(alfrid.ShaderLibs.bigTriangleVert, fs);

		console.log(this.shader);

		const fboSize = 512;
		const o = {
			minFilter:GL.LINEAR,
			magFilter:GL.LINEAR
		};
		this._fbo = new alfrid.FrameBuffer(fboSize, fboSize, o);
	} 


	reset() {
		this._fbo.bind();
		GL.clear(1, 0, 0, 1);
		this.shader.bind();
		this.shader.uniform("uTime", "float", Math.random() * 0xFF);
		GL.draw(this.mesh);
		this._fbo.unbind();
	}


	getTexture() {
		return this._fbo.getTexture();
	}

	get texture() {
		return this._fbo.getTexture();
	}
}

export default NoiseMap;