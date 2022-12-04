const mobileCheck = () => {
  let isMobile = false;
  if (typeof window !== "undefined") {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent
      )
    ) {
      isMobile = true;
    }
  }
  return isMobile;
};

const isMobile = mobileCheck();

export { isMobile };
