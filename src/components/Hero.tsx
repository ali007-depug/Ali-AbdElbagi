import TypeWritter from "./TypeWritter";

import { useTranslation } from "react-i18next";

export default function Hero() {
  const {t,i18n} = useTranslation();
  return (
    <section className="px-4 pt-4 md:pb-14 text-center font-extrabold">
      <div className="relative z-10 p-6 rounded-xl md:flex md:justify-between">
        {/* Avatar with fade animation */}
        <img
          src={"me.jpg"}
          width={280}
          height={280}
          alt="Ali AbdElbagi img"
          loading="eager"
          fetchPriority="high"
          className={`shadow-xl w-60 md:w-70 md:h-70 lg:w-100 lg:h-100 rounded-full lg:mx-auto my-auto max-md:mx-auto 
            transition-opacity duration-700 ease-in-out 
            `}
        />

        {/* Hero text */}
        <div className="md:w-1/2 md:text-start md:flex md:justify-center md:flex-col">
          <h2 className="text-p-color max-md:my-5 text-4xl sm:text-5xl font-extrabold">
             {t('hero.hi')} 🙋‍♂️
          </h2>

          <h3 className="text-p-color text-fluid font-extrabold my-5">
            <TypeWritter texts={t(`hero.heading`)} typingSpeed={100} key={i18n.language} />
          </h3>

          <p className="text-s-color font-semibold text-lg text-blance sm:text-xl sm:w-1/2 md:w-fit lg:w-[40ch] max-md:mx-auto">
            {t('hero.name')}{" "}
            <span className="font-bold text-p-color">
              {t('hero.job')}{" "}
            </span>
            {t('hero.desc')}
          </p>

          <a
            href="https://www.linkedin.com/in/ali-abdelbagi-02313b223/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit max-md:mx-auto rounded my-3 bg-p-color text-bg-color px-6 py-4 hover:bg-n-color hover:text-p-color transition-all duration-300 ease-in-out md:text-lg"
          >
            {t('hero.btnText')}
          </a>
        </div>
      </div>
    </section>
  );
}
