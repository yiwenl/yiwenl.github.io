import { Draw, Geom } from "alfrid";
import vs from "shaders/plane.vert";
import fs from "shaders/plane.frag";

class DrawPlane extends Draw {
  constructor() {
    super();

    const s = 12;
    const num = 200;
    const mesh = Geom.plane(s, s, num, "xz");

    this.setMesh(mesh).useProgram(vs, fs);
  }
}

export default DrawPlane;
