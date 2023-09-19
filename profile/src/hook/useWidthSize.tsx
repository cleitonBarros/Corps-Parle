import { useEffect, useState } from "react";

export function UseWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const Resize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", Resize);
  }, []);
  return size;
}
