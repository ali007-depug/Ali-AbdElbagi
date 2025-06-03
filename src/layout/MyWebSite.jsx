import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import { ProjcetsProvider } from "../contexts/ProjectsContext";

export default function MyWebSite() {
  return (
    <>
      <Header />
      <main>
        {/* <ProjcetsProvider> */}
          <Outlet />
        {/* </ProjcetsProvider> */}
      </main>
    </>
  );
}
