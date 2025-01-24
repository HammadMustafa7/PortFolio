import React, { useEffect, useState } from "react";

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e) => {
      setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () =>
      { window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
      }
  }, []);

  return (
    <div>
      <div
        className="fixed z-[9999] w-7 h-7 rounded-full  pointer-events-none"
        style={{
          left: position.x,
          top: position.y,
          position: "fixed",
          WebkitTransformOrigin: "left top", // Corrected property name
          transformOrigin: "left top",
          WebkitTransition: "transform 0.35", // Unified transition syntax
          transition: "transform 0.35s",
          WebkitTransform: "scale(1) translate(-50%, -50%)", // Unified transform syntax
          transform: "scale(1) translate(-50%, -50%)",
          mixBlendMode: "exclusion", // Corrected to camelCase
          backgroundColor: "#fff", // Fixed color syntax
        }}
      >

      </div>
    </div >
  );
}

export default CursorFollower;
