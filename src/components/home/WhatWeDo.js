import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function WhatWeDo() {
  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    // Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <div
    manageModal={manageModal}
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="  px-[80px] cursor-none "
    >
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
      <div className="relative">
        <div
        
          className="grid grid-cols-2 gap-20 w-full h-full py-20 z-0"
        >
          <img src="/si-1.webp" alt="hung" />
          <img src="/si-2.webp" alt="hung" />
          <img src="/si-3.webp" alt="hung" />
          <img src="/si-04.webp" alt="hung" />
        </div>
      </div>

      <motion.div
        ref={cursor}
        className="cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="cursorLabel"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </div>
  );
}
