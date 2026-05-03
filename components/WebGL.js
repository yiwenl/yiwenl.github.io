import WebGLAnimation from "./webgl/WebGLAnimation";
import { useAlfrid } from "../hooks/useAlfrid";
import styles from "../styles/Landing.module.css";

export default function WebGL() {
  //The argument for useThree is your threejs main class
  const canvas = useAlfrid(WebGLAnimation);

  return (
    <>
      <div ref={canvas} className={styles.webgl} />
    </>
  );
}
