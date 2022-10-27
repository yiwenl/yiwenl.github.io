import "./hash";
import EventDispatcher from "events";
import {
  GL,
  CameraPerspective,
  OrbitalControl,
  DrawAxis,
  DrawCopy,
} from "alfrid";
import Scheduler from "scheduling";
import Config from "./Config";
import Assets from "./Assets";
import preload from "./utils/preload";
import { random, logError, RAD } from "./utils";
import Ripple from "./Ripple";

// utils
import generateHeightMap from "./generateHeightMap";

// draw calls
import DrawPlane from "./DrawPlane";

// event names
export const LOADED = "loaded";

class WebGLAnimation extends EventDispatcher {
  constructor() {
    super();
    this.canvas = document.createElement("canvas");
    GL.init(this.canvas, { alpha: true, preserveDrawingBuffer: true });

    // states
    this._isPlaying = false;

    // enterframe
    this._efIndex = Scheduler.addEF(() => this._loop());

    // load assets
    preload().then(() => this._onAssetsLoaded(), logError);
  }

  _onAssetsLoaded() {
    console.log("Assets loaded");

    this._initWorld();
    this.emit(LOADED);
  }

  _initWorld() {
    this._camera = new CameraPerspective();
    this._camera.setPerspective(70 * RAD, GL.aspectRatio, 0.1, 50);
    this._orbitalControl = new OrbitalControl(this._camera, window, 4);
    this._orbitalControl.rx.value = Math.PI / 2;
    this._orbitalControl.lock();

    // debug views
    this._dCopy = new DrawCopy();
    this._dAxis = new DrawAxis();
    this._dPlane = new DrawPlane();

    // textures
    this._textureText = Assets.get("wensday");

    // ripples
    let numRipples = Config.numRipples;
    this._ripples = [];
    while (numRipples--) {
      const ripple = new Ripple();
      setTimeout(() => {
        ripple.reset();
      }, random(5000));
      this._ripples.push(ripple);
    }

    this._isPlaying = true;
  }

  play() {
    this._isPlaying = true;
  }

  pause() {
    this._isPlaying = false;
  }

  _loop() {
    if (!this._isPlaying) {
      return;
    }

    this._update();

    this._render();
  }

  _update() {
    const { heightMap, normalMap } = generateHeightMap(this._ripples);
    this._textureHeight = heightMap;
    this._textureNormal = normalMap;
  }

  _render() {
    let g = 245 / 255;
    // setup view port
    GL.viewport(0, 0, GL.width, GL.height);
    GL.clear(g, g, g, 1);
    GL.setMatrices(this._camera);

    this._dPlane
      .bindTexture("uHeightMap", this._textureHeight, 0)
      .bindTexture("uNormalMap", this._textureNormal, 1)
      .bindTexture("uTextMap", this._textureText, 2)
      .draw();
  }

  resize(mWidth, mHeight) {
    GL.setSize(mWidth, mHeight);
    if (this._camera) {
      this._camera.setPerspective(70 * RAD, GL.aspectRatio, 0.1, 50);
    }
  }

  destroy() {
    Scheduler.removeEF(this._efIndex);
  }
}

export default WebGLAnimation;
