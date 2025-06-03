import About from "../components/About";
import Hero from "../components/Hero";
import Works from "../components/Works";
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
