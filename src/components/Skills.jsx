import SkillsBadges from "./SkillsBadges";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Skills() {
  const { t,i18n } = useTranslation();
  return (
    <div className="px-dyp py-10 bg-p-color relative" id="skills">
      <h1 className="text-center font-bold text-dyTitle text-white mb-5">
        {t("mySkills.title")}
      </h1>
      {/* skill badges  */}
      <SkillsBadges />

      <Link to={"/skills"} className="">
        <button className="block mx-auto mt-10 md:absolute md:end-10 [direction:rtl]:md:start-10 md:bottom-5 p-5 bg-s-color text-white font-bold rounded cursor-pointer hover:bg-s-color/80 hover:text-bg-color transition-all duration-300 ease-in-out">
          {t("mySkills.btnNextLearning")} {i18n.language === "en" ? "➡️" : "⬅️"}
        </button>
      </Link>
    </div>
  );
}
