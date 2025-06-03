import { useRef, useState } from "react";

export default function AboutMe() {
  const [showLeftPopup, setShowLeftPoup] = useState(false);
  const leftSection = useRef(null);

  function showLeftInfo() {
    setShowLeftPoup(!showLeftPopup);
    console.log(showLeftPopup);
  }
  return (
    <>
      <section className="px-dyp relative">
        {/* seticon title */}
        <h1 className="text-4xl mx-auto w-fit font-bold text-fluid text-p-color mt-5 mb-10">
          About Me
        </h1>
        {/* small brief about me */}
        <div
          className={`fixed top-20 w-[350px] rounded  bg-p-color px-20 transition-all duration-300 ease-in-out z-99 ${
            !showLeftPopup ? "left-[-345px]" : "left-[-10px]"
          }`}
          ref={leftSection}
        >
          <h3 className="text-2xl text-bg-color font-bold my-3 ">
            Hello i'am <span className="text-white  font-extrabold">Ali</span> 🙋‍♂️
          </h3>
          <h4 className="text-white font-bold">I'am a :</h4>
          <ul className="space-y-1 text-bg-color  rounded py-4 w-fit [&_li]:font-bold">
            <li>Web Developer 🖱️</li>
            <li>Computer Enginner 🖥️</li>
            <li>Writer ✍️</li>
            <li>Reader 📚</li>
          </ul>
          {/* right arrow */}
          {/* when user open it .. it should change it's direction to be the oppesite */}
          <div
            className={`bg-bg-color shadow-md rounded-full absolute right-[-35px] top-[calc(252px/2)] w-[29px] h-[30px] p-5 cursor-pointer`}
            onClick={showLeftInfo}
          >
            <div
              className={`size-5 relative top-[-10px] 
  border-[3px] border-t-p-color border-r-p-color border-l-0 border-b-0 
  rounded-tl-none transition-all duration-300 ease-in-out ${!showLeftPopup ? "rotate-[40deg] left-[-15px]" : "rotate-[220deg] left-[-7px]"}`}
            ></div>
          </div>
        </div>
        {/* ===== End small brief about me ===== */}

        {/* texts + Img wrapper */}
        <div className="w-full flex gap-4 ">
          {/* img Section */}
          <div className="hidden sm:block sm:w-1/2 lg:w-1/3 order-1 sticky  top-10 h-fit shadow-lg shadow-p-color/50 rounded overflow-hidden">
            <img src="Ali.webp" alt="Thumb" className="" />
          </div>
          {/* ===== End img Section ====== */}

          {/* text section pragrpah */}
          <div className="w-fit sm:w-3/4 lg:w-3/4 space-y-5 [&_p]:text-lg [&_p]:text-p-color/95 [&_p]:font-medium [&_p]:first-letter:text-3xl">
            {/* title for the text section */}
            <h3 className="text-p-color text-6xl font-semibold">
              How my Story begin ?
            </h3>
            {/* ==== End title for the text section ==== */}

            {/*  1st prag  */}
            <div>
              <h4 className="text-s-color text-3xl font-bold">
                With Technology :
              </h4>
              <p>
                My passion for technology began in my childhood, around 2008. I
                was fascinated by computers and spent many hours playing video
                games and browsing the internet. I enjoyed watching videos on
                YouTube and talking to friends on social media platforms like
                Facebook and Twitter. At the time, it felt like fun—but in
                reality, it started a deep interest in how technology works. By
                the time I reached high school, I knew I wanted to study
                something related to computers.
              </p>
            </div>
            {/* ==== End 1st prag ===== */}

            {/*  2nd prag  */}
            <div>
              <h4 className="text-s-color text-3xl font-bold">
                Unversity & High School :
              </h4>
              <p>
                In 2017, I took a big step and joined the University of Gezira,
                in the Faculty of Engineering and Technology, where I studied
                Computer Engineering. I started learning programming in high
                school, when we were taught the basics of Pascal and binary
                number systems. Then in 2018, I wrote my first real lines of
                code using C++. Seeing the result of something I created was a
                powerful and exciting experience—it confirmed that this is what
                I wanted to do.
              </p>
            </div>
            {/*  ==== End 2nd prag =====  */}

            {/*  3rd prag  */}
            <div>
              <h4 className="text-s-color text-3xl font-bold">
                Falling in love with UI & Linux :
              </h4>
              <p>
                In 2021, I discovered my real passion: building user interfaces.
                I realized I enjoy creating things people can actually see and
                use—designing layouts, building clean components, and making
                smooth user experiences. That same year, I made another
                important decision: I switched from using Windows to Linux as my
                main system, after a friend recommended it. Using Linux made me
                feel more focused and comfortable while coding. Today, I’m still
                learning and growing as a frontend developer—always driven by
                the same curiosity that started when I was a child.
              </p>
            </div>
            {/*  ====  End 3rd prag =====  */}
          </div>
          {/* ====== End text section Pragrpah ===== */}
        </div>
        {/* ==== End text + img Wrapper ==== */}
      </section>
    </>
  );
}
