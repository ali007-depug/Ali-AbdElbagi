import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="px-dyp py-16 bg-p-color" id="about">
      {/* section title */}
      <h1 className="text-center font-bold text-dyTitle text-white mb-10 tracking-wide">
        About Me 
      </h1>
      {/* Content  */}
      <div className="flex flex-col items-center gap-10 shadow shadow-sky-400 border-0 border-s-color rounded-xl lg:py-15">
        {/* texts + socail media wrppaer*/}
        <div className="flex flex-col lg:flex-row justify-between gap-10 p-6">
          <div className="text">
            <p className="text-white font-medium text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 max-md:text-center">
              I'm <span className="font-extrabold text-sky-400">Ali</span>, a
              Computer Engineer from Sudan who graduated from the University of
              Gazira in 2025.
            </p>
            <p className="text-white max-md:text-center font-medium text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I'm passionate about coding, love creating user-friendly digital
              experiences, and always eager to learn and grow as a web
              developer. I enjoy turning ideas into clean, responsive, and
              functional interfaces.
            </p>
          </div>
          {/* social media accounts */}
          <div className="myAccounts text-center  flex flex-col justify-center">
            <h3 className="text-white font-bold text-2xl mb-4 lg:w-[30ch]">
              See My Content On LinkedIn
            </h3>
          {/* accounts icons warpper */}
            <div className="flex flex-wrap justify-center items-center  gap-5 mt-4">
              <a
                href="https://www.linkedin.com/in/ali-abdelbagi-02313b223/"
                title="LinkedIn"
              >
                <img
                  src="./linkedIn.webp"
                  alt="LinkedIn"
                  className="size-15 hover:scale-110 transition-transform duration-300"
                />
              </a>
              {/* <a href="https://github.com/ali007-depug" title="GitHub">
                <img
                  src="./github.webp"
                  alt="GitHub"
                  className="w-10 hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a href="https://dev.to/ali007depug" title="Dev Community">
                <img
                  src="./dev.webp"
                  alt="Dev Community"
                  className="w-10 hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.frontendmentor.io/profile/ali007-depug"
                title="Frontend Mentor"
              >
                <img
                  src="./frontend.webp"
                  alt="Frontend Mentor"
                  className="w-10 bg-s-color rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
                />
              </a> */}
            </div>
          </div>
        </div>
        {/* button to see my story  */}
        <Link to={"/about"}>
          <button className="block w-fit px-4 py-4 max-md:mx-auto rounded-md my-3 bg-white text-p-color hover:bg-sky-600 hover:text-white cursor-pointer font-bold md:text-xl transition-all duration-200 ease-linear">
            Read My Story <span className="bg-sky-950 rounded">📖</span>
          </button>
        </Link>
      </div>
      {/* ==== End of content */}
    </div>
  );
}
