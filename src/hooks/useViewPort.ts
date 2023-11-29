import {
  MOBILE,
  TABLET,
  DESKTOP,
  IPAD_PRO
} from "../constants/index";
import { useEffect, useState } from "react";

export const useViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width <= 428) {
    return MOBILE;
  } else if (width > 428 && width <= 1024) {
    return TABLET;
  } else if (width > 1024 && width <= 1500) {
    return IPAD_PRO;
  } else if (width > 1500) {
    return DESKTOP;
  }
}