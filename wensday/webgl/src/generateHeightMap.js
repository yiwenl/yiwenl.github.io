import { GL, FrameBuffer, ShaderLibs, Draw, Geom } from "alfrid";

import fs from "shaders/height.frag";
import fsNormal from "shaders/normal.frag";

let fbo, fboNormal, draw, drawNormal;
const fboSize = 2048;

const generateHeightMap = () => {
  if (!fbo) {
    const type = GL.FLOAT;
    fbo = new FrameBuffer(fboSize, fboSize, { type });
    fboNormal = new FrameBuffer(fboSize, fboSize, { type });

    draw = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fs)
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(fbo)
      .draw();

    drawNormal = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(ShaderLibs.bigTriangleVert, fsNormal)
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(fboNormal)
      .bindTexture("texture", fbo.texture, 0)
      .uniform("uHeight", 0.15)
      .draw();
  }

  return { heightMap: fbo.texture, normalMap: fboNormal.texture };
};

export default generateHeightMap;
