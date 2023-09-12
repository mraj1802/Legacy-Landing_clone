import { useRouter } from "next/router";
import * as React from "react";
import isBrowser from "../utils/isBrowser";

interface IDimensions {
  width: any;
  height: any;
}

export default function useWindowSize() {
  const [width, setWidth] = React.useState(isBrowser() && window.innerWidth);
  const [height, setHeight] = React.useState(isBrowser() && window.innerHeight);
  const setDimension = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  React.useEffect(() => {
    isBrowser() &&
      window.addEventListener("resize", setDimension, { passive: true });
  }, [width, height]);

  const dimensions: IDimensions = {
    width: width,
    height: height,
  };

  return dimensions;
}
