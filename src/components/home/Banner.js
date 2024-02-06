import React, { useEffect } from 'react';


function Banner() {


  useEffect(() => {
    const handleScroll = () => {
      const opacity = 1 - window.scrollY / 250;
      document.querySelector('.customized').style.opacity = opacity > 0 ? opacity : 0;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#d1d1c7]">
      <div
        style={{ backgroundImage: `url("backgroundImage.jpg")` }}
        className="parallax min-h-[200px] bg-fixed bg-center bg-no-repeat bg-cover bg-accent-200"
      ></div>

      <div
        className={`customized h-[500px] bg-[#d1d1c7] z-50  text-center w-full flex flex-col items-center justify-top space-y-10`}
      >
        <p className="text-9xl font">
          HI THERE, <br /> I'M HUY NGUYEN.
        </p>
        <p className="text-3xl font-inconsolata max-w-[60%]">
          A freelance frontend developer & web designer propelling startup visions to reality.
        </p>
      </div>


    </section>
  );
}

export default Banner;
