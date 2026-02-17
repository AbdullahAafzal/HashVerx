"use client";

import { useEffect } from "react";

export default function BackgroundImage() {
  useEffect(() => {
    // Set the background image on the body element with cache busting
    const timestamp = new Date().getTime();
    document.body.style.backgroundImage = `url('/Artboard.jpeg?v=${timestamp}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      // Cleanup on unmount
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundAttachment = "";
      document.body.style.backgroundRepeat = "";
    };
  }, []);

  return null;
}
