import { ProjcetsProvider, useProjects } from "../contexts/ProjectsContext";
import WorkCards from "../components/WorkCards";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// types
import { ProjectsContextType } from "../components/WorkCards";
export default function MyWorks() {
  const { t } = useTranslation();

  return (
    <>
      <section className="px-dyp py-10">
        {/* title */}
        <h1 className="text-4xl mx-auto w-fit font-bold text-fluid text-p-color my-5">
          {t("worksPage.works.title")}
        </h1>

        {/* desc */}
        <p className="text-lg text-p-color/65 text-balance font-semibold mx-auto w-[35ch] max-xs:w-[30ch] md:w-[50ch] text-center mb-5">
          {t("worksPage.works.description")}
        </p>

        {/* Projects List */}
        <ProjcetsProvider>
          <TapList />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[15px]">
            <WorkCards numberOfCards={20} />
          </div>
        </ProjcetsProvider>
      </section>

      {/* contact */}
      <Contact />
    </>
  );
}

function TapList() {
  const { selectedCategory, setSelectedCategory } = useProjects() as ProjectsContextType;
  const { t } = useTranslation();

  // Translated list labels
  const list = [
    { key: "all", label: t("worksPage.works.filters.all") },
    { key: "personal", label: t("worksPage.works.filters.personal") },
    { key: "frontend mentor", label: t("worksPage.works.filters.frontend") },
    { key: "freelancing", label: t("worksPage.works.filters.freelancing") },
  ];

  return (
    <div className="flex justify-center max-sm:flex-col my-10">
      {list.map((item) => (
        <motion.button
          key={item.key}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            selectedCategory === item.key ? "bg-s-color !text-bg-color " : ""
          } capitalize cursor-pointer sm:not-first:ml-2 max-sm:not-last:mb-2 px-2 py-3 rounded text-p-color bg-n-color/30 max-sm:min-w-20 sm:min-w-35 font-extrabold`}
          onClick={() => setSelectedCategory?.(item.key)}
        >
          {item.label}
        </motion.button>
      ))}
    </div>
  );
}
