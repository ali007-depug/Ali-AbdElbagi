import { Outlet } from "react-router-dom";
import { ProjcetsProvider } from "../contexts/ProjectsContext";
import Header from "../components/Header/Header";
import Contact from "../components/Home/contact/Contact";
import ScrollToTop from "../components/ScrollToTop";

export default function MyWebSite() {

  return (
    <div className={`min-h-[100dvh] font-ar`}>
      <ScrollToTop/>
      <Header />
      <main className="">
        {/* 😕 i comment the provider when devlopment for some reason but now i can't remember --- try to figure out */}
        <ProjcetsProvider>
          <Outlet />
        </ProjcetsProvider>
      </main>
      <Contact/>
    </div>
  );
}
