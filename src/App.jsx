// style
// import "./App.css";
import Header from "./components/Header";
import About from "./components/About"
import Hero from "./components/Hero";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <>
    {/* header */}
      <Header />
      {/* hero */}
      <Hero/>
      {/* about */}
      <About/>
      {/* work */}
      <Works/>
      {/* skills */}
      <Skills/>
      {/* contact */}
      <Contact/>
    </>
  );
}

export default App;
