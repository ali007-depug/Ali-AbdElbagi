import { motion } from "framer-motion";
import propTypes from "prop-types";
export default function Skills() {
  const skills = {
    html: "/html.webp",
    css: "/css3.webp",
    js: "/js.webp",
    sass: "/sass.webp",
    react: "/react.webp",
    tailwind: "/tailwindCss.webp",
    vite:"/vite.svg",
    git:"/git.webp",
    github: "/github.webp",
    linux : "./linux.webp",
    cli: "./cli.webp"
  };

  return (
    <div className="px-dyp" id="skills">
      <h1 className="text-center font-bold text-fluid text-p-color mb-5">
        My Skills
      </h1>
      <Badges skills={skills} />
    </div>
  );
}

function Badges({ skills }) {
  return (
    <motion.div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))]  gap-6"
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}>
      {Object.entries(skills ?? {}).map(([tech, iconSrc], index) => (
        <>
        <motion.div className="flex flex-col gap-4 items-center rounded-md shadow-2xl "
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}>
          <img
            key={index}
            src={iconSrc}
            alt={tech}
            title={tech}
            className="w-10 mt-2.5"
            
          />
          <h1 className="uppercase text-s-color font-semibold mb-2 tracking-widest">{tech}</h1>
          </motion.div>
        </>
      ))}
    </motion.div>
  );
}

Badges.propTypes = {
  skills: propTypes.object.isRequired,
}