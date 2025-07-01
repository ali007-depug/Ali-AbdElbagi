import Contact from "../components/Contact";
import SkillsBadges from "../components/SkillsBadges";

export default function MySkills() {
  return (
    <>
    <section className="px-dyp py-10 bg-p-color">
      {/* title */}
      <h1 className="text-dyTitle mx-auto w-fit font-bold  text-white my-5">
        My Skills
      </h1>
      {/* desc */}
      <p className="text-gray-50/80  text- font-semibold mx-auto text-center w-[30ch] sm:w-[50ch] mb-5">
        I’ve worked with a variety of tools and technologies in real-world
        projects. Here’s a snapshot of what I use to design, build, and deploy
        frontend applications
      </p>
      {/* skill badges */}
      <SkillsBadges isLearntSkills={true} bg={'bg-sky-900'} cardWidth={'350px'}/>

      {/* Thing i want to learn */}
      <h2 className="text-2xl md:text-4xl mx-auto w-fit font-bold  text-white my-5">
        Next-Level Tools I’m Diving Into
      </h2>

    <SkillsBadges isLearntSkills={false} bg={'bg-gray-500'} cardWidth={'350px'}/>
    </section>
    {/* contact */}
    <Contact/>
    </>
  );
}
