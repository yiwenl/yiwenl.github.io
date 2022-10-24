// import WebGLAnimation from "../build/webgl-anim.es.js";
import WebGLAnimation, { LOADED } from "./WebGLAnimation";
import Settings from "./Settings";
import "./debug";
import addControl from "./utils/addControl";

// init settings
Settings.init();

// initialize WebGL animation
const webglAnim = new WebGLAnimation();
document.body.appendChild(webglAnim.canvas);

// event handling
webglAnim.on(LOADED, () => {
  console.log("WebGL Ready");
});

// resizing
const resize = () => {
  const { innerWidth, innerHeight } = window;
  webglAnim.resize(innerWidth, innerHeight);
};

window.addEventListener("resize", resize);
resize();

// debugging
addControl(webglAnim);
