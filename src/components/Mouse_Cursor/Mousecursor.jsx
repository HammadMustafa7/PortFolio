import React, { useEffect, useState } from "react";

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const mobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);

    if (!mobileCheck) {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const handleTouchMove = (e) => {
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, []);

  return (
    <>
      {!isMobile && (
        <div
          className="fixed z-[9999] w-7 h-7 rounded-full pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
            position: "fixed",
            transformOrigin: "left top",
            transition: "transform 0.35s",
            transform: "scale(1) translate(-50%, -50%)",
            mixBlendMode: "exclusion",
            backgroundColor: "#fff",
          }}
        />
      )}
    </>
  );
}

export default CursorFollower;
