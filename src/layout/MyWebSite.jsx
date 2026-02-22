import { Outlet } from "react-router-dom";
import { ProjcetsProvider } from "../contexts/ProjectsContext";
import Header from "../components/Header/Header";
import Contact from "../components/Home/contact/Contact";
import ScrollToTop from "../components/ScrollToTop";

export default function MyWebSite() {

  return (
    <div className={`min-h-[100dvh] font-ar`}>
      <ScrollToTop/>
      <div className="fixed z-90 bg-p-color w-full text-white flex justify-center p-2 gap-2">
        <a className="text-sky-400" href="https://ali-abd-elbagi-v2.vercel.app/en-US">Go To My New Portfolio</a>
        <p>This Site is No Longer Updated</p>
      </div>
      <Header />
      <main className="">
        <ProjcetsProvider>
          <Outlet />
        </ProjcetsProvider>
      </main>
      <Contact/>
    </div>
  );
}
