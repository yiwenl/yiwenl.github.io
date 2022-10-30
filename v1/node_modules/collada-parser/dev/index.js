// index.js

import ColladaParser from '../lib/ColladaParser';
import alfrid, { GL, Scheduler } from 'alfrid';
import { mat4 } from 'gl-matrix';

//	canvas setup
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

document.body.style.margin = 0;
document.body.style.background = 'black';

canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//	setup alfrid
GL.init(canvas);
GL.disable(GL.CULL_FACE);


//	camera
const camera = new alfrid.CameraPerspective();
camera.setPerspective(Math.PI/3, window.innerWidth / window.innerHeight, .1, 100);


//	camera control
const control = new alfrid.OrbitalControl(camera);
control.radius.value = 25;
control.rx.value = control.ry.value = 0.3;


//	helpers
const bAxis = new alfrid.BatchAxis();
const bDots = new alfrid.BatchDotsPlane();


let boat = [];
const _caches = {};

function formBuffer(mData, mNum) {
	const ary = [];

	for(let i=0; i<mData.length; i+= mNum) {
		let o = [];
		for(let j=0; j<mNum; j++) {
			o.push(mData[i+j]);
		}

		ary.push(o);
	}

	return ary;
}

//	load model
ColladaParser.load('./assets/boat.dae', (meshes)=> {
	const mtxScale = mat4.create();
	const s = 0.01;
	mat4.scale(mtxScale, mtxScale, vec3.fromValues(s, s, s));

	boat = meshes.map((o)=> {
		const { vertices, normals, coords, triangles, name } = o.mesh;

		let mesh;
		if(!_caches[name]) {
			const _vertices = formBuffer(vertices, 3);
			const _normals = formBuffer(normals, 3);
			const _coords = formBuffer(coords, 2);

			mesh = new alfrid.Mesh();
			mesh.bufferVertex(_vertices);
			mesh.bufferTexCoord(_coords);
			mesh.bufferNormal(_normals);
			mesh.bufferIndex(triangles);	

			_caches[name] = mesh;
		} else {
			mesh = _caches[name];
		}
		

		const m = mat4.create();
		mat4.multiply(m, mtxScale, o.modelMatrix);

		return {
			mesh,
			modelMatrix:m
		}
	});
});


//	shader

const fs = `
	precision mediump float;

	varying vec3 vNormal;

	float diffuse(vec3 N, vec3 L) {
		return max(dot(N, normalize(L)), 0.0);
	}


	vec3 diffuse(vec3 N, vec3 L, vec3 C) {
		return diffuse(N, L) * C;
	}

	void main(void) {
	    float d = diffuse(vNormal, vec3(1.0));
	    d = mix(d, 1.0, .2);
	    gl_FragColor = vec4(vec3(d), 1.0);
	}
`
const shader = new alfrid.GLShader(null, fs);


//	enter frame
Scheduler.addEF(loop);


//	loop
function loop() {
	GL.clear(0, 0, 0, 0);
	GL.setMatrices(camera);

	bAxis.draw();
	bDots.draw();

	shader.bind();
	boat.forEach((o)=> {
		GL.rotate(o.modelMatrix);
		GL.draw(o.mesh);
	});
}
