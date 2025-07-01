import { Suspense,lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(()=> import("./pages/Home"));
import MyWorks from "./pages/MyWorks";
import AboutMe from "./pages/AboutMe";
import MySkills from "./pages/MySkills";
import MyWebSite from "./layout/MyWebSite";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Suspense fallback={<Loading/>}>

      <Routes>
        <Route path="/" element={<MyWebSite />}> 
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="works" element={<MyWorks />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="skills" element={<MySkills/>}/>
        </Route>
      </Routes>

      </Suspense>

    </>
  );
}

export default App;
