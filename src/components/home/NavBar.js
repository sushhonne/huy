import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function NavBar({ isActive, setIsActive }) {
  const data = [
    { title: "Home" },
    { title: "About" },
    { title: "Services" },
    { title: "Works" },
    { title: "Reviews" },
    { title: "Contact" },
  ];

  const navRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });

    lenis.on("scroll", (e) => {
      console.log(e);
      if (navRef.current) {
        navRef.current.style.transform = `translateX(${e}px)`;
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      initial={{ width: "0" }}
      animate={{ width: "40%" }}
      exit={{ width: "0" }}
      transition={{ type: "spring", stiffness: 100, damping: 40 }}
      className="fixed top-0 h-screen w-screen -z-50"
    >
      <div
        ref={navRef}
        className={` relative bg-nav-card h-[680px] rounded-2xl mt-4 flex flex-col space-y-4 overflow-hidden `}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black/10 z-50 rounded-2xl"></div>
        <div className="absolute -top-4 right-0 z-0 ">
          <img src="ele.svg" alt="" />
        </div>
        <div className="p-28 space-y-4 z-50">
          {data.map((item, index) => (
            <div key={index} className="">
              <p
           
                className="text-6xl font-bold text-[#e8e8e3]"
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
