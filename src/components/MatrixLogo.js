"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const MatrixLogo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Image
      src={isMobile ? "/matrix-pharma-logo.png" : "/matrix-pharma.svg"}
      alt="Matrix Pharma Logo"
      width={isMobile ? 211 : 280}
      height={isMobile ? 40 : 60}
      priority
    />
  );
};

export default MatrixLogo;
