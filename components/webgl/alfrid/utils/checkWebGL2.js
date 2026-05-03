const checkWebGL2 = () => {
  if (typeof document === "undefined") {
    return true;
  }
  const canvas = document.createElement("canvas");
  const ctx =
    canvas.getContext("experimental-webgl2") || canvas.getContext("webgl2");
  return !!ctx;
};

export { checkWebGL2 };
