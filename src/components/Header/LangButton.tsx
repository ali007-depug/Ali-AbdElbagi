import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ChangeLangButton({ language }: {language:string}) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = i18n.dir(lng); // set RTL/LTR

    document.body.classList.remove("font-en", "font-ar"); // remove fonts first
    // added based on language
    document.body.classList.add(lng === "en" ? "font-en" : "font-ar");

    // 🌟 Correct path read for HashRouter
    const hash = window.location.hash; // "#/ar/blog"

    // remove "#/"
    const cleanPath = hash.replace(/^#\//, ""); // "ar/blog"

    // replace ar|en prefix
    const newPath = cleanPath.replace(/^(ar|en)\//, `${lng}/`);

    // navigate WITHOUT leading slash
    navigate(newPath);
  };

  return (
    <button
      className={`${
        i18n.language === language
          ? `bg-p-color`
          : `bg-p-color/60 hover:bg-p-color cursor-pointer`
      } text-white text-sm px-2 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white  transition-all duration-300 ease-in-out`}
      onClick={() => changeLanguage(language)}
    >
      {language === "en" ? "EN 🇺🇸" : "AR 🇸🇩"}
    </button>
  );
}
