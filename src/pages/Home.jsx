import { lazy } from "react";
const About = lazy(() => import("../components/About"));
const Hero = lazy(() => import("../components/Hero"));
const Works = lazy(() => import("../components/Works"));
const Skills = lazy(() => import("../components/Skills"));
const Contact = lazy(() => import("../components/Contact"));
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
