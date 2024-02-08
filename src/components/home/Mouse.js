import React, { useRef, useState } from "react";
import { useMouse } from "react-use";
import { motion } from "framer-motion";

export default function Mouse() {
  const [cursorEnabled, setCursorEnabled] = useState(false);

  const parentRef = useRef(null);
  const { elX, elY } = useMouse(parentRef);
  return (
    <div
      className={`w-full   relative  h-full  px-[80px] bg-black rounded-b-[80px]  `}
      ref={parentRef}

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
          className="real-cursor "
        >
          View
        </motion.div>
      )}
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
      <div className="relative cursor-none ">
        <div className="flex gap-20 w-full h-full py-20 z-0">
          <div
                onMouseEnter={() => setCursorEnabled(true)}
                onMouseLeave={() => setCursorEnabled(false)}
          className="overflow-hidden rounded-2xl w-[60%] flex items-center justify-center ">
            <img
            
              src="/si-1.webp"
              alt="hung"
              className="object-cover transition-transform duration-300 hover:scale-110 "
            />
          </div>
          <div 
                onMouseEnter={() => setCursorEnabled(true)}
                onMouseLeave={() => setCursorEnabled(false)}
          className="overflow-hidden w-[40%] flex items-center justify-center">
            <img
              src="/si-2.webp"
              alt="hung"
              className="object-cover rounded-2xl   transition-transform duration-300 hover:scale-110 "
            />
          </div>
     
        </div>

        <div className="flex gap-20 w-full h-full py-20 z-0">
       <div
             onMouseEnter={() => setCursorEnabled(true)}
             onMouseLeave={() => setCursorEnabled(false)}
       className="overflow-hidden rounded-2xl w-[40%] flex items-center justify-center">
            <img
              src="/si-3.webp"
              alt="hung"
              className="object-cover rounded-2xl transition-transform duration-300 hover:scale-110 "
            />
          </div>
          <div
                onMouseEnter={() => setCursorEnabled(true)}
                onMouseLeave={() => setCursorEnabled(false)}
          className="overflow-hidden rounded-2xl w-[60%] flex items-center justify-center">
            <img
              src="/si-04.webp"
              alt="hung"
              className="object-cover  transition-transform duration-300 hover:scale-110 "
            />
          </div>
       </div>
      </div>
    </div>
  );
}
