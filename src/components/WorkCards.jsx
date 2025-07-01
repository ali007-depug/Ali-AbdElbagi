import propTypes from "prop-types";
import { useProjects } from "../contexts/ProjectsContext";
import { motion } from "motion/react";

export default function WorkCards({ customStyle ,numberOfCards  }) {

  const { filterdProjects } = useProjects(); // this return work items
  
  // mappign through cards
  const mapinnCards = filterdProjects.map((work,index) => {
    if(index <= numberOfCards){
    return (
      <>
      <motion.div
        key={work.id}
        initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1, // stagger effect
            ease: "easeOut",
          }}
      >
      <Card
      title={work.title}
      details={work.details}
      thumb={work.img}
      href={work.href}
      repo={work.repo}
      builtWith={work.builtWith}
      customStyle={customStyle}
      />
      </motion.div>
      </>
    );
  }
  });

  return mapinnCards;
}

// card component

function Card({ title, details, thumb, href, repo, builtWith, customStyle }) {
  return (
    // wrapper
    <article
      className={`work bg-white shadow-2xl shadow-p-color rounded-md overflow-hidden ${customStyle} `}
    >
      {/* anchor tag */}
      <div className="group relative">
        {/* thumb wrapper */}
        <div className="work__thumb w-[100%] min-h-[169px] bg-s-color">
          {/* thumb */}
          <img
            src={thumb}
            alt=""
            className="img__thumb w-[90%] mx-auto p-2.5 group-hover:w-[100%] group-hover:p-0 transition-all duration-300 ease-in-out "
          />
        </div>
        {/* projects content wrapper */}
        <div className="work__content px-4 mt-6 my-3">
          {/* project name */}
          <h2 className="text-p-color text-xl font-bold">{title}</h2>
          {/* project details */}
          <h4 className="text-s-color text-sm capitalize font-semibold">{details}</h4>
          {/* Tech that used in projects wrapper & repo */}
          <div className="mt-4 flex items-center justify-between gap-3.5 @container">
            {/* title */}
            {/* loop over the tech icons */}
            <div className="flex gap-3 items-center bg-">
              <span className="text-sky-800 font-bold">Built with</span>
              {Object.entries(builtWith ?? {}).map(([tech, iconSrc], index) => (
                  <img
                    key={index}
                    src={iconSrc}
                    alt={tech}
                    title={tech}
                    className="@md:size-8 size-6"
                  />
              ))}
            </div>
            {/* ==== work links ==== */}
            <div className="flex bg-re">
              {/* liveSite */}
              <a
                href={href}
                target="_blank"
                className="flex items-center gap-1  px-2 py-2 rounded-[5px] text-p-color font-semibold hover:[&_img]:animate-pulse"
                title="live Site"
              >
                <img src="eye.webp" alt="" className="size-8" />
                <h5 className="@md:block hidden w-fit">Live Site</h5>
              </a>
              {/* === End live Site === */}
              {/* git hub repo code */}
              <a
                href={repo}
                target="_blank"
                className="flex items-center gap-1  px-2 py-2 rounded-[5px] text-p-color font-semibold hover:[&_img]:animate-bounce"
                title="Code"
              >
                <img src="code.webp" alt="" className="size-8" />
                <h5 className="@md:block hidden">Code</h5>
              </a>
              {/* ==== End github repo ==== */}
            </div>
            {/* ==== End work links ==== */}
          </div>
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  details: propTypes.string.isRequired,
  thumb: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  repo: propTypes.string.isRequired,
  builtWith: propTypes.object.isRequired,
  customStyle: propTypes.string.isRequired,
};
