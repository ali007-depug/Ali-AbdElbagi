import Contact from "../components/Contact";
import SkillsBadges from "../components/SkillsBadges";
import { useTranslation } from "react-i18next";
export default function MySkills() {
  const {t}  = useTranslation()
  return (
    <>
    <section className="px-dyp py-10 bg-p-color">
      {/* title */}
      <h1 className="text-dyTitle mx-auto w-fit font-bold  text-white my-5">
        {t('skillsPage.title')}
      </h1>
      {/* desc */}
      <p className="text-gray-50/80  text- font-semibold mx-auto text-center w-[30ch] sm:w-[50ch] mb-5">
      {t('skillsPage.description')}
      </p>
      {/* skill badges */}
      <SkillsBadges isLearntSkills={true} bg={'bg-sky-900'} cardWidth={'350px'}/>

      {/* Thing i want to learn */}
      <h2 className="text-2xl md:text-4xl mx-auto w-fit font-bold  text-white my-5">
        {t('skillsPage.nextLevelTitle')}
      </h2>

    <SkillsBadges isLearntSkills={false} bg={'bg-gray-500'} cardWidth={'350px'}/>
    </section>
    {/* contact */}
    <Contact/>
    </>
  );
}
