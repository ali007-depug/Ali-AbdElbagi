import SkillsBadges from "./SkillsBadges";
export default function Skills() {

  return (
    <div className="px-dyp py-10 bg-p-color" id="skills">
      <h1 className="text-center font-bold text-dyTitle text-white mb-5">
        My Skills
      </h1>
      {/* skill badges  */}
      <SkillsBadges />
      
    </div>
  );
}

