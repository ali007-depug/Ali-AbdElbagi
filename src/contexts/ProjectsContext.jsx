/**
 * ----- This us Context used to  : -------
 * Provide componets with selected catgeroy & set func to selected category & func to fileterd projects based on the selected category
 */

import { createContext, useContext, useState } from "react";

// my work items
const worksItems = [
  {
    id: 0,
    title: "Students Grades App",
    details:"Built for University Of Kordofan - Facluty Of Medicine ",
    img: "std4.webp",
    href: "https://ali007-depug.github.io/students-grade-app/",
    repo:"https://github.com/ali007-depug/students-grade-app/",

    category: "freelancing",
    builtWith: {
      react: "react.webp",
      tailwind: "tailwindCss.webp",
      firebase : "firebase.webp",
      vite: "vite.svg",
    },
  },
  {
    id: 1,
    title: "Multi step Form",
    details: "forntEnd mentor challegne",
    img: "multistepform.webp",
    href: "https://bucolic-pony-727a7f.netlify.app/",
    repo:"https://github.com/ali007-depug/Multi-step-form/",
    category: "frontend mentor",
    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 2,
    title: "Electric Status",
    details: "To show Electrical Stauts for Some Of Sudan Cities",
    img: "eStatus.webp",
    href: "https://ali007-depug.github.io/E-status/",
    repo:"https://github.com/ali007-depug/E-status/",
    category: "personal",
    builtWith: {
      react: "react.webp",
      tailwind: "tailwindCss.webp",
      firebase: "firebase.webp",
      vite: "vite.svg",
    },
  },
  {
    id: 3,
    title: "Promise Web App",
    details: "Todo App",
    img: "promiseApp.webp",
    href: "https://ali007-depug.github.io/promise-web-app/",
    repo:"https://github.com/ali007-depug/promise-web-app/",
    category: "personal",

    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 4,
    title: "7essAbAt - حسابات",
    details: "built to helpe me in small busniess calculations",
    img: "7essabat.webp",
    href: "https://ali007-depug.github.io/7essAbAt-App-V2/",
    repo:"https://github.com/ali007-depug/7essAbAt-App-V2/",
    category: "personal",

    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 5,
    title: "URL Shorten API",
    details: "forntEnd mentor challegne",
    img: "urlShorten.webp",
    href: "https://ali007-depug.github.io/Frontend-Mentor-Shortly-URL-shortening-API-Challenge/",
    repo:"https://github.com/ali007-depug/Frontend-Mentor-Shortly-URL-shortening-API-Challenge/",

    category: "frontend mentor",
    builtWith: {
      react: "react.webp",
      tailwind: "tailwindCss.webp",
      epress : "express.webp",
      vite: "vite.svg",
    },
  },
  {
    id: 6,
    title: "Bookmark landing page",
    details: "forntEnd mentor challegne",
    img: "bookmark.webp",
    href: "https://ali007-depug.github.io/bookmark-landing-page-master/",
    repo:"https://github.com/ali007-depug/bookmark-landing-page-master/",
    category: "frontend mentor",
    builtWith: {
      react: "react.webp",
      sass: "sass.webp",
      vite: "vite.svg",
    },
  },
  {
    id: 7,
    title: "Product List With Cart Menu",
    details: "forntEnd mentor challegne",
    img: "pList.webp",
    href: "https://ali007-depug.github.io/Proudct-list-with-cart-menu/",
    repo:"https://github.com/ali007-depug/Prouduct-list-with-cart-menu/",
    category: "frontend mentor",
    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 8,
    title: "Room Homepage",
    details: "forntEnd mentor challegne",
    img: "room.webp",
    href: "https://ali007-depug.github.io/room-home-page/",
    repo:"https://github.com/ali007-depug/room-home-page/",
    category: "frontend mentor",
    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 9,
    title: "Intro Section With Dropdown Menu",
    details: "forntEnd mentor challegne",
    img: "intro.webp",
    href: "https://ali007-depug.github.io/intero-section-with-dropdown-menu/",
    repo:"https://github.com/ali007-depug/intero-section-with-dropdown-menu/",
    category: "frontend mentor",
    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },

  
];

// create Context
const projcetsContext = createContext();

//   create a provider components 
export function ProjcetsProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // if the slected category == all then render the all item if it's not then filter it & return the corrseponding item
  const filterdProjects =
    selectedCategory === "all"
      ? worksItems
      : worksItems.filter((item) => item.category === selectedCategory);

  return (
    <projcetsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        filterdProjects,
      }}
    >
      {children}
    </projcetsContext.Provider>
  );
}

export function useProjects() {
  return useContext(projcetsContext);
}
