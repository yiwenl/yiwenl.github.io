// SceneApp.js

import alfrid, { Scene, GL } from 'alfrid';
import ViewAddVel from './ViewAddVel';
import ViewSave from './ViewSave';
import ViewRender from './ViewRender';
import ViewSim from './ViewSim';

import VIVEUtils from './utils/VIVEUtils';

const scissor = function(x, y, w, h) {
	GL.scissor(x, y, w, h);
	GL.viewport(x, y, w, h);
}

class SceneApp extends alfrid.Scene {
	constructor() {
		super();
		GL.enableAlphaBlending();

		const { near, far } = params.camera;
		this._count = 0;
		this.camera.setPerspective(Math.PI/2, GL.aspectRatio, near, far)
		this.orbitalControl.radius.value = 10;
		this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;

		this._modelMatrix = mat4.create();
		this._projectionMatrix = mat4.create();
		mat4.perspective(this._projectionMatrix, Math.PI/4, GL.aspectRatio, near, far)

		if(VIVEUtils.hasVR) {
			GL.enable(GL.SCISSOR_TEST);
			this.toRender();

			this.resize();
			this.orbitalControl.lock();
		}
	}

	_initTextures() {
		console.log('init textures');

		//	FBOS
		const numParticles = params.numParticles;
		const o = {
			minFilter:GL.NEAREST,
			magFilter:GL.NEAREST,
			type:GL.HALF_FLOAT
		};

		this._fboCurrentPos = new alfrid.FrameBuffer(numParticles, numParticles, o);
		this._fboTargetPos  = new alfrid.FrameBuffer(numParticles, numParticles, o);
		this._fboCurrentVel = new alfrid.FrameBuffer(numParticles, numParticles, o);
		this._fboTargetVel  = new alfrid.FrameBuffer(numParticles, numParticles, o);
		this._fboExtra  	= new alfrid.FrameBuffer(numParticles, numParticles, o);

		this.resize();
	}


	_initViews() {
		console.log('init views');
		
		//	helpers
		this._bCopy = new alfrid.BatchCopy();
		// this._bAxis = new alfrid.BatchAxis();
		// this._bDots = new alfrid.BatchDotsPlane();
		// this._bBall = new alfrid.BatchBall();


		//	views
		this._vAddVel = new ViewAddVel();
		this._vRender = new ViewRender();
		this._vSim 	  = new ViewSim();

		this._vSave = new ViewSave();
		GL.setMatrices(this.cameraOrtho);

		this._fboCurrentPos.bind();
		this._vSave.render(0);
		this._fboCurrentPos.unbind();

		this._fboExtra.bind();
		this._vSave.render(1);
		this._fboExtra.unbind();

		this._fboTargetPos.bind();
		this._bCopy.draw(this._fboCurrentPos.getTexture());
		this._fboTargetPos.unbind();

		GL.setMatrices(this.camera);
	}


	updateFbo() {
		//	Update Velocity : bind target Velocity, render simulation with current velocity / current position
		this._fboTargetVel.bind();
		GL.clear(0, 0, 0, 1);
		this._vSim.render(this._fboCurrentVel.getTexture(), this._fboCurrentPos.getTexture(), this._fboExtra.getTexture());
		this._fboTargetVel.unbind();


		//	Update position : bind target Position, render addVel with current position / target velocity;
		this._fboTargetPos.bind();
		GL.clear(0, 0, 0, 1);
		this._vAddVel.render(this._fboCurrentPos.getTexture(), this._fboTargetVel.getTexture());
		this._fboTargetPos.unbind();

		//	SWAPPING : PING PONG
		let tmpVel          = this._fboCurrentVel;
		this._fboCurrentVel = this._fboTargetVel;
		this._fboTargetVel  = tmpVel;

		let tmpPos          = this._fboCurrentPos;
		this._fboCurrentPos = this._fboTargetPos;
		this._fboTargetPos  = tmpPos;

	}


	render() {
		

		if(!VIVEUtils.hasVR) { this.toRender(); }
	}


	toRender() {
		this._count ++;
		if(this._count % params.skipCount == 0) {
			this._count = 0;
			GL.disable(GL.SCISSOR_TEST);
			this.updateFbo();
			GL.enable(GL.SCISSOR_TEST);
		}

		if(VIVEUtils.hasVR) {	VIVEUtils.vrDisplay.requestAnimationFrame(()=>this.toRender());	}		


		if(VIVEUtils.hasVR && VIVEUtils.isPresenting) {
			this.orbitalControl.lock();
			
			VIVEUtils.getFrameData();
			const w2 = GL.width/2;
			VIVEUtils.setCamera(this.camera, 'left');

			scissor(0, 0, w2, GL.height);
			GL.setMatrices(this.camera);
			GL.rotate(this._modelMatrix);
			this.renderScene();


			VIVEUtils.setCamera(this.camera, 'right');
			scissor(w2, 0, w2, GL.height);
			GL.setMatrices(this.camera);
			GL.rotate(this._modelMatrix);
			this.renderScene();

			VIVEUtils.submitFrame();

			// //	re-render whole
			if(!GL.isMobile) {
				scissor(0, 0, GL.width, GL.height);

				GL.clear(0, 0, 0, 0);
				mat4.copy(this.cameraVR.projection, this.camera.projection);

				GL.setMatrices(this.cameraVR);
				GL.rotate(this._modelMatrix);
				this.renderScene();	
			}

		} else {
			scissor(0, 0, GL.width, GL.height);
			if(VIVEUtils.hasVR && GL.isMobile) {
				VIVEUtils.getFrameData();
				VIVEUtils.setCamera(this.camera, 'left');
				mat4.copy(this.camera._projection, this._projectionMatrix);
			} else {
				this.orbitalControl.lock(false);
			}

			GL.setMatrices(this.camera);
			GL.rotate(this._modelMatrix);
			this.renderScene();
		}
	}


	renderScene() {
		GL.clear(0, 0, 0, 0);
		let p = this._count / params.skipCount;
		this._vRender.render(this._fboTargetPos.getTexture(), this._fboCurrentPos.getTexture(), p, this._fboExtra.getTexture());
	}


	resize() {
		let scale = VIVEUtils.hasVR ? 2 : 1;
		if(GL.isMobile) {
			scale = 1;
		}
		GL.setSize(window.innerWidth * scale, window.innerHeight * scale);
		this.camera.setAspectRatio(GL.aspectRatio);
	}
}


export default SceneApp;