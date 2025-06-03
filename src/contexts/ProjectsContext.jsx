import { createContext, useContext, useState } from "react";

const worksItems = [
  {
    id: 0,
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
    title: "Promise Web App",
    details: "App that use to write down my habits",
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
    id: 3,
    title: "7essAbAt - حسابات",
    details: "App that built to helped me in small busniess calculation",
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
    id: 4,
    title: "URL Shorten API",
    details: "forntEnd mentor challegne",
    img: "urlShorten.webp",
    href: "https://ali007-depug.github.io/Frontend-Mentor-Shortly-URL-shortening-API-Challenge/",
    repo:"https://github.com/ali007-depug/Frontend-Mentor-Shortly-URL-shortening-API-Challenge/",

    category: "frontend mentor",
    builtWith: {
      react: "react.webp",
      tailwind: "tailwindCss.webp",
      vite: "vite.svg",
    },
  },
];

// create Context
const projcetsContext = createContext();

//   create a function as provider
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
