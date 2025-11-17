import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { id: 0, link: "home" },
    { id: 1, link: "about" },
    { id: 2, link: "works" },
    { id: 3, link: "skills" },
    { id: 4, link: "blog" },
  ];

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navigate = useNavigate();
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

  const Mobilelinks = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link
          to={
            link.link === "home"
              ? ""
              : link.link === "blog"
              ? `${i18n.language}/blog`
              : link.link
          }
          onClick={toggleMenu}
          className={`transition-all duration-100 ease-in-out ${
            location.pathname === `/${link.link === "home" ? "" : link.link}`
              ? "border-b-s-color border-b-[3px]"
              : ""
          }`}
        >
          {t(`header.menu.${link.link}`)}
        </Link>
      </li>
    );
  });
  const Desktoplinks = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link
          to={
            link.link === "home"
              ? ""
              : link.link === "blog"
              ? `${i18n.language}/blog`
              : link.link
          }
          className={`transition-all duration-100 ease-in-out ${
            location.pathname === `/${link.link === "home" ? "" : link.link}`
              ? "border-b-s-color border-b-[3px]"
              : ""
          }`}
        >
          {t(`header.menu.${link.link}`)}
        </Link>
      </li>
    );
  });

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      ></div>
      {/* === End overlay === */}

      {/* header  */}
      <header className="flex items-center justify-between py-4 px-5 md:px-10 z-30 sticky">
        {/* avatar + info  */}
        <div className="header__avatarWithInfo md:w-1/3">
          {/* avatar */}
          <Link to={"/"} className="flex items-center gap-3 ">
            <img
              className="size-10 object-cover rounded-full"
              src="avatar.webp"
              alt={t(`header.avatarAlt`)}
              width={50}
              height={50}
            />
            {/* info */}
            <div className="header__info mt-2 text-p-color">
              <h2 className={`text-base font-bold sm:text-lg`}>
                {t(`header.name`)}
              </h2>
              <p className="text-xs font-semiboldbold">
                {t(`header.jobTitle`)}
              </p>
            </div>
          </Link>
        </div>
        {/* === End avatar + info === */}

        {/* nav */}
        <nav aria-label="mainNav">
          {/* show hamburger menu on the mobile screen */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-p-color cursor-pointer"
            aria-expanded={isMenuOpen}
            aria-controls="mobileMenu"
            aria-label={
              isMenuOpen
                ? t("header.aria.closeMenu")
                : t("header.aria.openMenu")
            }
          >
            {/* menu icon */}
            <img
              src={isMenuOpen ? "./icon-close.svg" : "./icon-hamburger.svg"}
              alt=""
              aria-hidden="true"
            />
          </button>

          {/* mobile nav */}
          <ul
            id="mobileMenu"
            className={
              isMenuOpen
                ? "flex flex-col justify-center items-center absolute right-0 mt-4 w-full text-center bg-n-color min-h-90 [&_li]:w-fit [&_a]:px-4 [&_a]:py-2 [&_a]:min-w-[90px] [&_a]:inline-block [&_a]:bg-bg-color [&_a]:text-p-color [&_a]:my-4 [&_a]:rounded-[5px] [&_a]:capitalize [&_a]:font-semibold [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-offset-2 [&_a]:focus:ring-white pb-3"
                : "hidden"
            }
          >
            {Mobilelinks}
            <div className="flex gap-2 [&_button]:text-sm  [&_button]:px-2 [&_button]:py-1  [&_button]:rounded-md [&_button]:font-semibold [&_button]:hover:bg-s-color [&_button]:focus:outline-none [&_button]:focus:ring-2 [&_button]:focus:ring-offset-2 [&_button]:focus:ring-white [&_button]:cursor-pointer transition-all duration-300 ease-in-out">
              <button
                className={`${
                  i18n.language || localStorage.getItem("i18n") === "en"
                    ? "bg-p-color text-white"
                    : "bg-bg-color text-black"
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`${
                  i18n.language === "ar"
                    ? "bg-p-color text-white"
                    : "bg-bg-color text-black"
                }`}
                onClick={() => changeLanguage("ar")}
              >
                AR
              </button>
            </div>
          </ul>
          {/* === End mobile nav === */}

          {/* desktop nav */}
          <ul className="hidden sm:flex sm:flex-wrap sm:justify-center space-x-2  [&_li]:w-fit  [&_a]:px-4 [&_a]:py-2  [&_a]:inline-block  [&_a]:capitalize [&_a]:font-semibold [&_a]:text-p-color [&_a]:text-base  [&_a]:hover:border-b-[3px] [&_a]:hover:border-s-color [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-offset-2 [&_a]:focus:ring-white">
            {Desktoplinks}
            <div className="flex gap-2  [&_button]:text-sm [&_button]:px-2 [&_button]:py-1  [&_button]:text-p-color [&_button]:rounded-md [&_button]:font-semibold [&_button]:hover:bg-sky-200 [&_button]:focus:outline-none [&_button]:focus:ring-2 [&_button]:focus:ring-offset-2 [&_button]:focus:ring-white [&_button]:cursor-pointer transition-all duration-300 ease-in-out">
              <button
                className={`${
                  localStorage.getItem("i18nextLng") === "en"
                    ? "bg-sky-200"
                    : "bg-bg-color"
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`${
                  localStorage.getItem("i18nextLng") === "ar"
                    ? "bg-sky-200"
                    : "bg-bg-color"
                }`}
                onClick={() => changeLanguage("ar")}
              >
                AR
              </button>
            </div>
          </ul>
          {/* === End desktop nav === */}
        </nav>
        {/* === End nav === */}
      </header>
      {/* === End header === */}
    </>
  );
}
