import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const env = process.env.NODE_ENV;
const isDev = env === "development";

console.log(pkg);
console.log("is Development", isDev);

const plugins = [
  resolve(), // so Rollup can find `ms`
  commonjs(), // so Rollup can convert `ms` to an ES module
];

if (!isDev) {
  plugins.push(terser());
}

export default [
  {
    input: "src/scheduler.js",
    output: {
      name: "scheduler",
      file: pkg.browser,
      format: "umd",
    },
    plugins,
  },
  {
    input: "src/scheduler.js",
    external: ["ms"],
    output: [{ file: pkg.module, format: "es" }],
    plugins,
  },
];
