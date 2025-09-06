import { Suspense,lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
const MyWorks = lazy(()=> import("./pages/MyWorks"));
const AboutMe = lazy(()=> import("./pages/AboutMe"));
const MySkills = lazy(()=> import("./pages/MySkills"));
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
