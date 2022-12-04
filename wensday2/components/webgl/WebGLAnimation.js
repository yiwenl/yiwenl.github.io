import { GL } from "./alfrid";
import EventDispatcher from "events";

class WebGLAnimation extends EventDispatcher {
  constructor(mContainer) {
    super();
    this.canvas = document.createElement("canvas");
    mContainer.appendChild(this.canvas);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    GL.init(this.canvas);
    // const ctx = this.canvas.getContext("2d");
    // const g = 155;
    // ctx.fillStyle = `rgb(${g}, ${g}, ${g})`;
    // ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default WebGLAnimation;
