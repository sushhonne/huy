import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Nav from "./Nav";



function Banner() {
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const opacity = 1 - window.scrollY / 400;
      document.querySelector(".customized").style.opacity =
        opacity > 0 ? opacity : 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 2.2 });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);


  return (
    <section className="bg-[#d1d1c7]">
      {/* burger menu */}
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="button z-50"
      >
        <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
      </div>
      {/* navbar */}
{isActive && <Nav/>}

      <div
        // style={{ backgroundImage: `url("backgroundImage.jpg")` }}
        className="parallax min-h-[200px] bg-fixed bg-center bg-no-repeat bg-cover bg-[#d1d1c7] relative flex items-center justify-between px-20"
      >
        {/* part-1 */}
        <div className=" h-full w-full ">
          <img src="logo.svg" width="100px" height="100px" alt="" />
        </div>
        {/* part-2 */}
        <div className="flex items-start justify-between space-x-0 w-[800px]">
          <div className="text-lg font-semibold text-[#a29e9a] flex items-start justify-start">
            AVAILABLE FOR WORK MARCH 2024
          </div>
          <div className="flex flex-col text-[#393632] text-[20px] font-medium">
            <p>About</p>
            <p>Services</p>
            <p>Works</p>
            <p>Reviews</p>
            <p>Contacts</p>
          </div>
        </div>
      </div>

      <div
        className={`customized h-[500px] bg-[#d1d1c7] z-50  text-center w-full flex flex-col items-center justify-top space-y-10`}
      >
        <p className="text-9xl font-grotesk font-extrabold text-[#393632]">
          HI THERE, <br /> I'M HUY NGUYEN.
        </p>
        <p className="text-3xl  max-w-[60%]">
          A freelance frontend developer & web designer propelling startup
          visions to reality.
        </p>
      </div>
    </section>
  );
}

export default Banner;
