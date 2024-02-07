import React, { useRef, useState } from "react";
import { useMouse } from "react-use";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const [cursorEnabled, setCursorEnabled] = useState(false);

  const parentRef = useRef(null);
  const { elX, elY } = useMouse(parentRef);

  const handleMouseEnter = () => {
    setCursorEnabled(true);
  };

  const handleMouseLeave = () => {
    setCursorEnabled(false);
  };

  return (
    <div className="bg-black px-[80px] cursor-none">
      <p className="animate two text-8xl font-bold text-[#d1d1c7]">
        <span>S</span>
        <span>E</span>
        <span>L</span>
        <span>E</span>
        <span>C</span>
        <span>T</span>
        <span>E</span>
        <span>D</span> &nbsp;
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>K</span>
        <span>S</span>
      </p>
      <div
        ref={parentRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        {cursorEnabled && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            style={{ left: elX - 30, top: elY - 30 }}
            className="real-cursor z-50 w-[100px] h-[100px] bg-pink-300 rounded-full text-white"
          >
            <div className="flex items-center justify-center w-full h-full">
              Explore
            </div>
          </motion.div>
        )}
        <div className="grid grid-cols-2 gap-20 w-full h-full py-20">
          <div
            className="image-container rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/si-1.webp" alt="hung" />
          </div>
          <div
            className="image-container rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/si-2.webp" alt="hung" />
          </div>
          <div
            className="image-container rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/si-3.webp" alt="hung" />
          </div>
          <div
            className="image-container rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/si-04.webp" alt="hung" />
          </div>
        </div>
      </div>
    </div>
  );
}
