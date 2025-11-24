import { Outlet } from "react-router-dom";
import { ProjcetsProvider } from "../contexts/ProjectsContext";
import Header from "../components/Header/Header";
import i18n from "../i18n";
import Contact from "../components/Home/Contact";
import ScrollToTop from "../components/ScrollToTop";

export default function MyWebSite() {
  const font = i18n.language === 'ar' ? 'font-ar' : 'font-en';

  return (
    <div className={`min-h-[100dvh] ${font}`}>
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
