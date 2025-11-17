import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Clarity from '@microsoft/clarity'; // for heatmap and google analytics
import "react-loadly/styles.css" // for react-loadly skeleton loader styles

const MyWebSite = lazy(() => import("./layout/MyWebSite"));
const Home = lazy(() => import("./pages/Home"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const MySkills = lazy(() => import("./pages/MySkills"));
const MyBlog = lazy(() => import("./pages/MyBlog"));

const BlogPost = lazy(()=> import("./pages/BlogPost"));
const PostTags = lazy(()=>import('./pages/PostTags'));
import Loading from "./components/Loading";
import Error from "./pages/Error";

function App() {
  const { t,i18n } = useTranslation();

  const CLARITY_PROJECT_ID = import.meta.env.VITE_REACT_APP_CLARITY_ID; 

  useEffect(() => {
    // set en as default in localStorage
    if (!localStorage.getItem("i18nextLng")) {
      localStorage.setItem("i18nextLng", "ar");
    }
    // Get current language (from i18n or localStorage)
    const lang = i18n.language || localStorage.getItem("i18nextLng") || "ar";

    // Apply direction + lang attribute
    document.documentElement.lang = lang;
    
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";

    Clarity.init(CLARITY_PROJECT_ID);

  }, [i18n.language]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MyWebSite />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="works" element={<MyWorks />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="skills" element={<MySkills />} />
          <Route path=":lang/blog" element={<MyBlog />} />
          <Route path=":lang/blog/:uniqueUrl/" element={<BlogPost/>} />
          <Route path=":lang/blog/tags/:tag/" element={<PostTags/>} />
          <Route path="*" element={<Error msg={t('errorPage.defaultMsg')}/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
