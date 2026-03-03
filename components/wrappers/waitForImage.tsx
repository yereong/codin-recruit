"use client";
import { useEffect, useState } from "react";

const WaitForImage: React.FC<{
  src: string;
  children: React.ReactNode;
  onLoad?: () => void;
}> = ({ src, children, onLoad }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      onLoad?.();
    };
  }, [src, onLoad]);

  return loaded ? <>{children}</> : null;
};

export default WaitForImage;