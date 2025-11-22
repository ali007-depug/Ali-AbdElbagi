import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChangeLangButton from "./LangButton";

interface NavProp {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Nav({ isMenuOpen, toggleMenu }: NavProp) {
  const location = useLocation();

  const navLinks = [
    { id: 0, link: "home" },
    { id: 1, link: "about" },
    { id: 2, link: "works" },
    { id: 3, link: "skills" },
    { id: 4, link: "blog" },
  ];

  const { t, i18n } = useTranslation();

  const links = navLinks.map((link) => {
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
          onClick={isMenuOpen ? toggleMenu : undefined}
          className={`transition-all duration-100 ease-in-out ${
            location.pathname === `/${link.link === "home" ? "" : link.link === "blog" ? `${i18n.language}/blog` : link.link}`
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
    <nav aria-label="mainNav">
      {/* show hamburger menu on the mobile screen */}
      <button
        onClick={toggleMenu}
        className="sm:hidden p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-p-color cursor-pointer"
        aria-expanded={isMenuOpen}
        aria-controls="mobileMenu"
        aria-label={
          isMenuOpen ? t("header.aria.closeMenu") : t("header.aria.openMenu")
        }
      >
        {/* menu icon */}
        <img
          src={isMenuOpen ? "./icon-close.svg" : "./icon-hamburger.svg"}
          alt=""
          aria-hidden="true"
        />
      </button>

      <ul
        id={isMenuOpen ? "mobileMenu" : "desktopMenu"}
        className={
          isMenuOpen
            ? "flex flex-col justify-center items-center absolute right-0 mt-4 w-full text-center bg-n-color min-h-90 [&_li]:w-fit [&_a]:px-4 [&_a]:py-2 [&_a]:min-w-[90px] [&_a]:inline-block [&_a]:bg-bg-color [&_a]:text-p-color [&_a]:my-4 [&_a]:rounded-[5px] [&_a]:capitalize [&_a]:font-bold [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-offset-2 [&_a]:focus:ring-white pb-3"
            : "hidden sm:flex sm:flex-wrap sm:justify-center space-x-2  [&_li]:w-fit  [&_a]:px-4 [&_a]:py-2  [&_a]:inline-block  [&_a]:capitalize [&_a]:font-bold [&_a]:text-p-color [&_a]:text-base  [&_a]:hover:border-b-[3px] [&_a]:hover:border-s-color"
        }
      >
        {links}
        {/* change lang buttons wrapper */}
        <div className={`flex gap-2  ${isMenuOpen ? "" : ""} `}>
          <ChangeLangButton language="en" />
          <ChangeLangButton language="ar" />
        </div>
      </ul>
    </nav>
  );
}
