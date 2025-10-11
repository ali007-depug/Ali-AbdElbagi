import SkillsBadges from "./SkillsBadges";
import { Link } from "react-router-dom";
export default function Skills() {

  return (
    <div className="px-dyp py-10 bg-p-color relative" id="skills">
      <h1 className="text-center font-bold text-dyTitle text-white mb-5">
        My Skills
      </h1>
      {/* skill badges  */}
      <SkillsBadges />
      
            <Link to={"/skills"} className="">
        <button className="block mx-auto mt-10 md:absolute md:right-10 md:bottom-5 p-5 bg-s-color text-white font-bold rounded cursor-pointer hover:bg-s-color/80 hover:text-bg-color transition-all duration-300 ease-in-out">
          New Tech I&apos;m Learning <span className="text-sky-300 underline"></span> Works ➡️
        </button>
      </Link>

    </div>
  );
}

