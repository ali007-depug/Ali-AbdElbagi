import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="px-dyp relative py-5 top-[76px] sm:max-md:top-[120px] bg-p-color"
      id="about"
    >
      {/* section title */}
      <h1 className="text-center font-bold text-dyTitle text-white mb-10 tracking-wide">
        {t("aboutMe.title")}
      </h1>
      {/* 2 col wrapper */}
      <div className="flex max-lg:flex-col justify-between">
        {/* texts Wrapper*/}
        <div className="flex flex-col lg:flex-row justify-between gap-10 outline outline-red-500">
          {/* Text */}
          <div className="text">
            <p className="text-white font-medium text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 max-md:text-center">
              {t("aboutMe.me")}{" "}
              <span className="font-extrabold text-sky-400">
                {t("aboutMe.name")}
              </span>
              {t("aboutMe.smallBreif")}
            </p>
            <p className="text-white max-md:text-center font-medium text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("aboutMe.aboutTech")}
            </p>
          </div>
        </div>
        {/* Info with icon wrapper */}
        <div className="w-150 h-100 bg-red-200"></div>
      </div>
      {/* ==== End of content */}

      {/* CTAs  */}
      <div>
        <div className="myAccounts text-center  flex flex-col justify-center">
          <h3 className="text-white font-bold text-2xl mb-4 lg:w-[30ch]">
            {t("aboutMe.getInTouch")}
          </h3>
          <div className="flex flex-wrap justify-center items-center  gap-5 mt-4">
            <a
              href="https://www.linkedin.com/in/ali-abdelbagi-02313b223/"
              title="LinkedIn"
            >
              <img
                src="./linkedIn.webp"
                alt="LinkedIn"
                className="size-15 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
        <Link to={"/about"}>
          <button className="block w-fit px-6 py-5 max-md:mx-auto rounded-full my-3 bg-white text-p-color hover:bg-sky-600 hover:text-white shadow-md shadow-sky-500 cursor-pointer font-bold md:text-xl transition-all duration-200 ease-linear">
            {t("aboutMe.btnStory")} {i18n.language === "en" ? "➡️" : "⬅️"}
          </button>
        </Link>
      </div>

    </div>
  );
}
