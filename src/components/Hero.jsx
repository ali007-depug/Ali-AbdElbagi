import { useEffect } from "react";
import { useState } from "react";
import TypewriterComponent from "typewriter-effect";

const myImgs = ["me.webp", "me2.webp", "me3.webp"];

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setImgIndex((prev) => (prev + 1) % myImgs.length); // change image
        setFade(true); // fade in
      }, 500); // match fade duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-4 text-center font-extrabold ">
      {/* The avatars that chagne every 5 seconds */}
      <div className="relative z-10  p-6 rounded-xl md:flex md:justify-between ">
        <img
          src={myImgs[imgIndex]}
          alt=""
          className={`shadow-xl w-60  md:w-70 md:h-70 lg:w-100 lg:h-100   rounded-full lg:mx-auto my-auto max-md:mx-auto transition-all duration-1000 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Hero texts */}
        <div className="md:w-1/2  md:text-start md:flex md:justify-center md:flex-col">
          {/* HI */}
          <h2 className="text-p-color max-md:my-5 text-4xl sm:text-5xl font-extrabold">
            HI
          </h2>
          {/* Moving texts  */}
          <h3 className="text-p-color text-fluid font-extrabold my-5">
            <TypewriterComponent
              options={{
                strings: ["I'm Ali AbdElbagi", "i'm a FrontEnd Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          {/* little disc about me */}
          <p className="text-s-color font-semibold text-lg text-balance sm:text-xl sm:w-1/2 md:w-fit lg:w-[40ch] max-md:mx-auto">
            I'm Ali, a Frontend Developer with a Computer Engineering
            background. I love turning ideas into functional, elegant web
            interfaces.
          </p>
          {/* link to my linked in */}
          <a
            href="mailto:aliroma849@gmail.com"
            target="_blank"
            className="block w-fit max-md:mx-auto rounded-md my-3 bg-p-color text-bg-color px-4 py-4 hover:bg-n-color hover:text-p-color"
          >
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
}
