import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 0, link: "home" },
    { id: 1, link: "about" },
    { id: 2, link: "works" },
    { id: 3, link: "skills" },
  ];

  const location = useLocation();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const Mobilelinks = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link
          to={`/${link.link === "home" ? "" : link.link}`}
          onClick={toggleMenu}
          className={`transition-all duration-100 ease-in-out ${
            location.pathname === `/${link.link === "home" ? "" : link.link}`
              ? "border-b-s-color border-b-[3px]"
              : ""
          }`}
        >
          {link.link}
        </Link>
      </li>
    );
  });
  const Desktoplinks = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link
          to={`/${link.link === "home" ? "" : link.link}`}
          className={`transition-all duration-100 ease-in-out ${
            location.pathname === `/${link.link === "home" ? "" : link.link}`
              ? "border-b-s-color border-b-[3px]"
              : ""
          }`}
        >
          {link.link}
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
          <Link to={'/'} className="max-sm:flex max-sm:gap-2 max-sm:items-center">
          <img
            className="max-smhidden size-10 object-cover rounded-full"
            src="avatar.webp"
            alt="avatar image"
            width={50}
            height={50}
            />
          {/* info */}
          <div className="header__info mt-2 text-p-color">
            <h2 className={`text-base font-bold sm:text-lg`}>Ali AbdElbagi</h2>
            <p className="text-xs font-semiboldbold">Front End Developer</p>
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
            aria-label={isMenuOpen ? "close menu" : "open menu"}
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
                ? "flex flex-col justify-center items-center absolute right-0 mt-4 w-full text-center bg-n-color min-h-90 [&_li]:w-fit [&_a]:px-4 [&_a]:py-2 [&_a]:min-w-[90px] [&_a]:inline-block [&_a]:bg-bg-color [&_a]:text-p-color [&_a]:my-4 [&_a]:rounded-[5px] [&_a]:capitalize [&_a]:font-semibold [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-offset-2 [&_a]:focus:ring-white"
                : "hidden"
            }
          >
            {Mobilelinks}
          </ul>
          {/* === End mobile nav === */}

          {/* desktop nav */}
          <ul className="hidden sm:flex sm:flex-wrap sm:justify-center space-x-8  min-h-[90px] [&_li]:w-fit  [&_a]:px-4 [&_a]:py-2  [&_a]:inline-block  [&_a]:capitalize [&_a]:font-semibold [&_a]:text-p-color [&_a]:hover:border-b-[3px] [&_a]:hover:border-s-color [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-offset-2 [&_a]:focus:ring-white">
            {Desktoplinks}
          </ul>
          {/* === End desktop nav === */}
        </nav>
        {/* === End nav === */}
      </header>
      {/* === End header === */}
    </>
  );
}
