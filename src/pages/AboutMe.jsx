import Sidepanel from "../components/SidePanel";
import Contact from "../components/Contact";
import { motion } from "motion/react";
export default function AboutMe() {
  return (
    <>
      <section className="px-dyp py-10 relative bg-p-color ">
        {/* seticon title */}
        <h1 className="text-dyTitle mx-auto w-fit font-bold  text-white my-5">
          About Me
        </h1>
        {/* small brief about me */}
        <Sidepanel />
        {/* ===== End small brief about me ===== */}

        {/* texts + Img wrapper */}
        <div className="w-full flex gap-4 ">
          {/* img Section */}
          <div className="hidden  sm:block sm:w-1/2  lg:w-1/3 order-1 sticky  top-10 h-fit shadow-lg shadow-p-color/50 rounded overflow-hidden">
            <img src="Ali.webp" alt="Thumb" className="" />
            <p className="absolute bottom-0 left-2 text-sky-500 bg-p-color rounded px-2 italic text-sm font-bold">
              on: 23-7-2022
            </p>
          </div>
          {/* ===== End img Section ====== */}

          {/* text section pragrpah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Start hidden & pushed down
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} // Animation duration
            className="w-fit sm:w-3/4 lg:w-3/4 space-y-5 [&_h4]:text-sky-300 [&_p]:text-lg [&_p]:text-white/95 [&_p]:font-medium [&_p]:text- [&_p]:first-letter:text-3xl [&_a]:text-sky-400 [&_a]:underline"
          >
            {/* title for the text section */}
            <h3 className="text-white text-4xl lg:text-6xl text-balance font-bold">
              How my Story begin ?
            </h3>
            {/* ==== End title for the text section ==== */}

            {/* ===== With technology ====  */}
            <div>
              <h4 className="text-white text-3xl font-semibold">
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
            {/* ==== End With Technology ==== */}

            {/*  ==== Unversity & high ====  */}
            <div>
              <h4 className="text-white text-3xl font-semibold">
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
            {/*  ==== End Unversity & hig =====  */}

            {/*  ===== Falling in love ... ====  */}
            <div>
              <h4 className="text-white text-3xl font-semibold">
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
            {/* ==== End Fall in love.... ===== */}
            {/*  ==== ✨ With Frontend Development  ====  */}
            <div>
              <h4 className="text-white text-3xl font-semibold">
                With Frontend Development :
              </h4>
              {/* part 1 */}
              <p>
                My journey into frontend development began in mid-2022, when I
                started learning the basics of HTML and CSS through YouTube —
                special thanks to{" "}
                <a
                  href="https://www.youtube.com/channel/UCSNkfKl4cU-55Nm-ovsvOHQ"
                  target="_blank"
                  className=""
                >
                  Osama Elzero’s channel
                </a>
                . As I progressed, I started to understand the importance of
                design consistency and got introduced to core layout concepts
                like Flexbox, Grid, and the idea of responsive design for
                different screen sizes.
              </p>
              {/* part 2 */}
              <p>
                Over time, I focused on improving my CSS skills even further. I
                started learning CSS preprocessors like Sass, which helped me
                write more structured and maintainable stylesheets by using
                variables, nesting, and mixins. I also explored Tailwind CSS, a
                utility-first framework that allowed me to build modern,
                responsive UIs faster by composing classes directly in the
                markup. These tools significantly boosted my productivity and
                helped me create cleaner, scalable designs.
              </p>
              {/* part 3 */}
              <p>
                Once I had a solid foundation in HTML and CSS, I moved on to
                learning JavaScript to add interactivity and dynamic behavior to
                my interfaces. I began applying my knowledge by building various
                projects, and I’m especially grateful to{" "}
                <a href="https://www.frontendmentor.io/home" target="_blank">
                  Frontend Mentor
                </a>
                , which provided real-world designs that helped me practice and
                grow my skills.{" "}
              </p>
              {/* part 4 */}
              <p>
                With time, I shifted my focus to improving what I had learned,
                especially in CSS, thanks to amazing resources like{" "}
                <a href="https://www.youtube.com/kevinpowell" target="_blank">
                  Kevin Powell’s channel
                </a>
                ,{" "}
                <a
                  href="https://www.youtube.com/@TheCoderCoder"
                  target="_blank"
                >
                  Jessica Chans
                </a>
                , and{" "}
                <a href="https://www.youtube.com/c/jamesqquick" target="_blank">
                  James Q Quick
                </a>
                — all of whom provided practical advice and techniques that
                helped me deepen my understanding. I also developed the habit of
                learning from written resources, benefiting greatly from
                websites like{" "}
                <a href="https://css-tricks.com/" target="_blank">
                  CSS-Tricks
                </a>{" "}
                and{" "}
                <a href="https://ishadeed.com/" target="_blank">
                  Ahmed Shadeed’s blog
                </a>
                , which offered advanced CSS insights and best practices.{" "}
              </p>
              {/* part 5 */}
              <p>
                In 2024, I began learning React.js from{" "}
                <a href="https://www.youtube.com/@tarmeez" target="_blank">
                  Tarmmez Academy
                </a>
                , which opened up a whole new world for me — allowing me to
                build more powerful, reusable, and maintainable user interfaces.
              </p>
              {/* part 6 */}
              <p>
                Throughout this journey, I’ve built many personal projects and
                small applications, which have boosted my confidence in my
                skills. I'm still learning and growing every day, always aiming
                to improve the quality, performance, and user experience of the
                interfaces I creat
              </p>
            </div>
            {/*  ====  End With forntend Developement  =====  */}
          </motion.div>
          {/* ====== End text section Pragrpah ===== */}
        </div>
        {/* ==== End text + img Wrapper ==== */}
      </section>

      <Contact />
    </>
  );
}
