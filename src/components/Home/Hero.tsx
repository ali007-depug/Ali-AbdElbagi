import TypeWritter from "../TypeWritter";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [showAboutMeScrollDown, setShowAboutMeScrollDown] = useState(true);

  useEffect(() => {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition)
    const scroll = () => {
      if (scrollPosition > window.scrollY && window.scrollY > 0 ) {
        setShowAboutMeScrollDown(true);
      } else if(scrollPosition === 0) {
        setShowAboutMeScrollDown(false);
      }
      scrollPosition = window.scrollY
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <section className="px-4 relative min-h-screen max-lg:top-[70px] sm:max-md:top-[111px] pt-4 -20 text-center font-extrabold z-10 rounded-xl md:flex md:gap-15 md:justify-evenly lg:justify-between ">
      {/* <div className="relative z-10 p-6 rounded-xl md:flex md:justify-between"> */}
      {/* Hero img */}
      <img
        src={"me.webp"}
        width={280}
        height={280}
        alt="face of the website developer"
        loading="eager"
        fetchPriority="high"
        className={`shadow-md shadow-s-color w-60 md:w-70 md:h-70 lg:w-100 lg:h-100 rounded-full lg:mx-auto my-auto max-md:mx-auto 
            transition-opacity duration-700 ease-in-out border border-accent  
            `}
      />

      {/* Hero text */}
      <div className="md:w-1/2 @container md:text-start md:flex md:justify-center md:flex-col">
        {/* HI */}
        <h2 className="text-p-color max-md:my-5 text-4xl sm:text-5xl font-bold">
          {t("hero.hi")} 🙋‍♂️
        </h2>
        {/* TypeWriiter */}
        <h3 className="text-p-color text-fluid font-bold my-5">
          <TypeWritter
            texts={t(`hero.heading`)}
            typingSpeed={100}
            key={i18n.language}
          />
        </h3>
        {/* JOB */}
        <p className="font-extrabold itali mb-3 text-lg sm:text-xl text-s-color">
          {t("hero.job")}{" "}
        </p>
        {/* DESC */}
        <p className="text-s-color font-normal text-lg text-blance sm:text-xl sm:w-1/2 md:w-fit lg:w-[40ch] max-md:mx-auto">
          {t("hero.desc")}
        </p>

        {/* buttons */}
        <div className="flex @xs:flex-wrap @xs:justify-center w-fit max-lg:mx-auto gap-5 mt-8">
          {/* contact button */}
          <a
            href="https://www.linkedin.com/in/ali-abdelbagi-02313b223/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-4 w-fit max-md:mx-auto rounded-full  bg-p-color text-white hover:bg-s-color border border-sky-400 transition-all duration-300 ease-in-out md:text-lg"
          >
            <span className="block">{t("hero.btnText")} </span>
            <span className="block">
              <FaLinkedin className="inline ms-2" size={25} color="#eee" />
            </span>
          </a>
          {/* blog button */}
          <Link
            to={`/${i18n.language}/blog`}
            className="flex items-center px-8 py-4 w-fit max-md:mx-auto rounded-full  bg-s-color text-white hover:bg-s-color/80  border border-accen transition-all duration-300 ease-in-out md:text-lg"
          >
            <span className="block">{t("hero.blogBtn")}</span>
            <span className="block">
              <MdArticle className="inline ms-2" size={25} color="#eee" />
            </span>
          </Link>
        </div>
        {showAboutMeScrollDown && (
          <div className="hidden lg:flex items-center px-5 py-3 absolute bottom-0 rounded-full bg-s-color/50 text-white animate-bounce w-fit">
             {t("aboutMe.title")} <HiChevronDoubleDown color="#223549" />
          </div>
        )}
        {/* Next Section */}
      </div>
      {/* </div> */}
    </section>
  );
}
