// style
import Home from "./pages/Home";
import MyWorks from "./pages/MyWorks";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import MyWebSite from "./layout/MyWebSite";
function App() {
  return (
    <>
    
      <Routes>
 
        <Route path="/" element={<MyWebSite />}> 
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="works" element={<MyWorks />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="skills" element={<Skills/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
