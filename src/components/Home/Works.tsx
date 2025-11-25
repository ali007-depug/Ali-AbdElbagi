import WorkCards from "../WorkCards";
import { Link } from "react-router-dom";
// import { ProjcetsProvider } from "../contexts/ProjectsContext";
import { useProjects, ProjcetsProvider } from "../../contexts/ProjectsContext";
import { useTranslation } from "react-i18next";
import { FaArrowCircleRight } from "react-icons/fa";

// type
import { ProjectsContextType } from "../WorkCards";

export default function Work() {
  const { allProjects } = useProjects() as ProjectsContextType;
  const { t, i18n } = useTranslation();

  return (
    <div
      className="px-dyp relative top-[76px] sm:max-md:top-[121px] mt-10 md:pb-30"
      id="works"
    >
      {/* section title */}
      <h1 className="text-center font-bold text-dyTitle text-p-color mb-15">
        {t("myWorks.title")}
      </h1>
      {/* wrapper for cards */}
      <div className="card__wrapper grid xs:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[15px]">
        {/* cards */}
        <ProjcetsProvider>
          <WorkCards numberOfCards={5} />
        </ProjcetsProvider>
      </div>
      {/* view all projcets button */}
      <Link
        to={"/works"}
        className="flex items-center gap-2 w-fit mx-auto mt-10 md:absolute md:end-20  [dir:rtl]:md:start-20 md:bottom-5 p-5 bg-p-color text-white font-bold rounded cursor-pointer hover:bg-s-color hover:text-bg-color transition-all ease-in-out duration-300"
      >
        {t("myWorks.btnExplore.first")}
        <span className="text-sky-300 underline">{allProjects}</span>{" "}
        {t("myWorks.btnExplore.second")}{" "}
        {i18n.language === "en" ? (
          <FaArrowCircleRight />
        ) : (
          <FaArrowCircleRight className="rotate-180" />
        )}
      </Link>
    </div>
  );
}
