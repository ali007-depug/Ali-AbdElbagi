import { lazy } from "react";
import About from "../components/Home/about/About";
import Hero from "../components/Home/Hero";
const Works = lazy(() => import("../components/Home/Works"));
import Skills from "../components/Home/Skills";

export default function Home() {
  return (
    <>
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
      {/* work */}
      <Works />
      {/* skills */}
      <Skills />
    </>
  );
}
