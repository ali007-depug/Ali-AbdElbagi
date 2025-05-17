export default function About() {
  return (
<div className="px-dyp py-16" id="about">
  <h1 className="text-center font-bold text-4xl sm:text-5xl text-p-color mb-10">
    About Me
  </h1>

  <div className="flex flex-col lg:flex-row justify-between gap-10 shadow-md border-2 border-s-color rounded-xl p-6 lg:py-15 bg-white/5 backdrop-blur-sm">
  <div className="text">
    <p className="text-p-color font-medium text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
      I'm <span className="font-bold text-s-color">Ali</span>, a Computer Engineer from Sudan who graduated from the University of Gazira in 2025.</p>
      <p className="text-p-color font-medium text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
      I'm passionate about coding, love creating user-friendly digital experiences, and always eager to learn and grow as a web developer.
      I enjoy turning ideas into clean, responsive, and functional interfaces.
    </p>
    </div>
    <div className="myAccounts text-center  flex flex-col justify-center">
    <h3 className="text-p-color font-bold text-2xl mb-4 lg:w-[30ch]">
        See My Content On Development Platforms
      </h3>

      <div className="flex flex-wrap justify-center items-center  gap-5 mt-4">
        <a href="https://www.linkedin.com/in/ali-abdelbagi-02313b223/" title="LinkedIn">
          <img src="./linkedIn.webp" alt="LinkedIn" className="w-10 hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://github.com/ali007-depug" title="GitHub">
          <img src="./github.webp" alt="GitHub" className="w-10 hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://dev.to/ali007depug" title="Dev Community">
          <img src="./dev.webp" alt="Dev Community" className="w-10 hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://www.frontendmentor.io/profile/ali007-depug" title="Frontend Mentor">
          <img src="./frontend.webp" alt="Frontend Mentor" className="w-10 bg-s-color rounded-full shadow-xl hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </div>
</div>
  );
}
