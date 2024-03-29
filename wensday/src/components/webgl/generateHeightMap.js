import { GL, FrameBuffer, Draw, Geom } from "./alfrid";
import { random } from "./utils";
import Config from "./Config";
import Scheduler from "scheduling";
import vs from "./shaders/bigTriangle.vert.js";
import fs from "./shaders/height.frag.js";
import fsNormal from "./shaders/normal.frag.js";

let fbo, fboNormal, draw, drawNormal;
const fboSize = 2048 / 2;
const seed = random();

const generateHeightMap = (mRipples) => {
  if (!fbo) {
    const _fs = fs.replace("{NUM}", Config.numRipples);
    const type = GL.FLOAT;
    fbo = new FrameBuffer(fboSize, fboSize, { type });
    fboNormal = new FrameBuffer(fboSize, fboSize, { type });

    draw = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vs, _fs)
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(fbo)
      .uniform("uSeed", seed)
      .draw();

    drawNormal = new Draw()
      .setMesh(Geom.bigTriangle())
      .useProgram(vs, fsNormal)
      .setClearColor(0, 0, 0, 1)
      .bindFrameBuffer(fboNormal)
      .bindTexture("texture", fbo.texture, 0)
      .uniform("uHeight", 0.15);
  }

  let centers = [];
  let waves = [];

  mRipples.forEach(({ center, wave }) => {
    centers = centers.concat(center);
    waves = waves.concat(wave);
  });

  draw
    .uniform("uCenter", "vec2", centers)
    .uniform("uWave", "vec3", waves)
    .uniform("uTime", Scheduler.getElapsedTime() * 0.1)
    .bindFrameBuffer(fbo)
    .draw();

  drawNormal.bindTexture("texture", fbo.texture, 0).draw();

  return { heightMap: fbo.texture, normalMap: fboNormal.texture };
};

export default generateHeightMap;
