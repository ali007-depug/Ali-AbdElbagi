import { lazy } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
const Works = lazy(() => import("../components/Works"));
import Skills from "../components/Skills";
import Contact from "../components/Contact";

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
      {/* contact */}
      <Contact />
    </>
  );
}
