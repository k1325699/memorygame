import { useEffect, useState } from "react";

const useResponse = () => {
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const aspectRatio = screenHeight / screenWidth;
      setIsLandscape(aspectRatio < 1);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return isLandscape;
};

export default useResponse;
