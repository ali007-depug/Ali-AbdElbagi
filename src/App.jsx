import { Suspense,lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const MyWebSite = lazy(()=> import("./layout/MyWebSite"))

// import Home from "./pages/Home";
const Home = lazy(()=> import("./pages/Home"));
const MyWorks = lazy(()=> import("./pages/MyWorks"));
const AboutMe = lazy(()=> import("./pages/AboutMe"));
const MySkills = lazy(()=> import("./pages/MySkills"));

import Loading from "./components/Loading";

function App() {

  useEffect(()=>{
  // get the data on ls
  const lang = localStorage.getItem("i18nextLng") || "en";
  lang === "en" ? document.documentElement.dir = "ltr" : document.documentElement.dir = "rtl";
},[])


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
