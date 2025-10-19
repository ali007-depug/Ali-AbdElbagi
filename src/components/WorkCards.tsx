import { useProjects } from "../contexts/ProjectsContext";
import { motion } from "motion/react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next"; // ✅ Add this

interface WorkCardsProps{
customStyle?:string;
numberOfCards:number;
}

export interface Project{
  id:string;
  title:string;
  details:string;
  img:string;
  href:string;
  repo:string;
  builtWith : {[key:string]:string}
}
export interface ProjectsContextType {
  filterdProjects: Project[];
  allProjects?: number;
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void ;
}
export default function WorkCards({ customStyle, numberOfCards }:WorkCardsProps) {
  const { filterdProjects } = useProjects() as ProjectsContextType;
  const { t } = useTranslation(); // ✅ Add this

  let filterdProjectsArray:Project[] = filterdProjects
  const mapinnCards = filterdProjectsArray.map((work, index) => {
    if (index <= numberOfCards) {
      return (
        <Fragment key={work.id}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
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
              t={t} // ✅ Pass translation function
            />
          </motion.div>
        </Fragment>
      );
    }
  });

  return mapinnCards;
}

interface CardProps {
  title:string;
  details:string;
  thumb:string;
  href:string;
  repo:string;
  customStyle?:string;
  builtWith : {[key:string]:string}
  t : (key:string)=>string;
}
// Card component
function Card({ title, details, thumb, href, repo, builtWith, customStyle, t }:CardProps) {
  return (
    <article className={`work bg-white shadow-2xl shadow-sky-300 rounded-md overflow-hidden ${customStyle}`}>
      <div className="group relative">
        {/* thumb wrapper */}
        <div className="work__thumb w-[100%] min-h-[169px] bg-s-color">
          <img
            src={thumb}
            alt=""
            className="img__thumb w-[90%] mx-auto p-2.5 group-hover:w-[100%] group-hover:p-0 transition-all duration-300 ease-in-out"
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
            {/* Tech icons */}
            <div className="flex gap-3 items-center">
              <span className="text-sky-800 font-bold">
                {t('myWorks.projects.builtWith')} {/* ✅ Translated */}
              </span>
              {Object.entries(builtWith ?? {}).map(([tech, iconSrc], index) => (
                <img
                  key={index}
                  src={iconSrc}
                  alt={tech}
                  title={tech} // ✅ Tech names remain in English (HTML, Sass, etc.)
                  className="@md:size-8 size-6"
                  loading="lazy"
                  fetchPriority="low"
                />
              ))}
            </div>
            
            {/* Work links */}
            <div className="flex">
              {/* Live Site */}
              <a
                href={href}
                target="_blank"
                className="flex items-center gap-1 px-2 py-2 rounded-[5px] text-p-color font-semibold hover:[&_img]:animate-pulse"
                title={t('myWorks.projects.viewProject')} // ✅ Translated tooltip
              >
                <img src="eye.webp" className="size-8" alt={t('myWorks.projects.liveSite')} />
                <h5 className="@md:block hidden w-fit">
                  {t('myWorks.projects.liveSite')} {/* ✅ Translated */}
                </h5>
              </a>
              
              {/* GitHub Repo */}
              <a
                href={repo}
                target="_blank"
                className="flex items-center gap-1 px-2 py-2 rounded-[5px] text-p-color font-semibold hover:[&_img]:animate-bounce"
                title={t('myWorks.projects.viewCode')} // ✅ Translated tooltip
              >
                <img src="code.webp" className="size-8" alt={t('myWorks.projects.code')} />
                <h5 className="@md:block hidden">
                  {t('myWorks.projects.code')} {/* ✅ Translated */}
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

