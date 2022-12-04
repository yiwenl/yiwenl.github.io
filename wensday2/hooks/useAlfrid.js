import { useEffect, useRef } from "react";

export const useAlfrid = (WebGLAnimClass) => {
  const canvas = useRef(null);
  useEffect(() => {
    new WebGLAnimClass(canvas.current);
  }, []);
  return canvas;
};
