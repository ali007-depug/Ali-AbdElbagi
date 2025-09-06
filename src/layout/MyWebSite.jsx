import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { ProjcetsProvider } from "../contexts/ProjectsContext";
import Header from "../components/Header";



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
