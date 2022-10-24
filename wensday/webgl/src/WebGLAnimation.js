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
import Assets from "./Assets";
import preload from "./utils/preload";
import { random, logError, RAD } from "./utils";

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
    this._orbitalControl = new OrbitalControl(this._camera, window, 5);
    this._orbitalControl.rx.value = Math.PI / 2;

    // debug views
    this._dCopy = new DrawCopy();
    this._dAxis = new DrawAxis();
    this._dPlane = new DrawPlane();

    // textures
    const { heightMap, normalMap } = generateHeightMap();
    this._textureHeight = heightMap;
    this._textureNormal = normalMap;
    this._textureText = Assets.get("wensday");

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

  _update() {}

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

    g = 300;
    GL.viewport(0, 0, g, g);
    this._dCopy.draw(this._textureHeight);
    GL.viewport(g, 0, g, g);
    this._dCopy.draw(this._textureNormal);
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
