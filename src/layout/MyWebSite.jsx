import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ProjcetsProvider } from "../contexts/ProjectsContext";

export default function MyWebSite() {
  return (
    <div className="h-[100dvh]">
      <Header />
      <main className="">
        {/* 😕 i comment the provider when devlopment for some reason but now i can't remember --- try to figure out */}
        <ProjcetsProvider>
          <Outlet />
        </ProjcetsProvider>
      </main>
    </div>
  );
}
