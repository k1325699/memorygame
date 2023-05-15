import { useEffect, useState } from "react";

const useResponse = () => {
  const [loading, setLoading] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
  return { isLandscape, loading };
};

export default useResponse;
