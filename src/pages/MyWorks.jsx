import { ProjcetsProvider, useProjects } from "../contexts/ProjectsContext";
import WorkCards from "../components/WorkCards";

export default function MyWorks() {

  return (
    <section className="px-dyp">
      <h1 className="text-4xl mx-auto w-fit font-bold text-fluid text-p-color my-5">
        My Works
      </h1>
      <p className="text-lg text-p-color/65  text-balance font-semibold mx-auto w-[50ch] mb-5">Here are some of the projects I've worked on — including personal, freelance, and frontend mentor challenges. </p>
      {/* Tap list filter based on [all,forntend mentor , personal , freelancer] */}
      <ProjcetsProvider>
        {/* taplist */}
        <TapList />
        {/* the cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[15px]">
        <WorkCards numberOfCards={20} />
        </div>
      </ProjcetsProvider>
    </section>
  );
}

function TapList() {
  const {selectedCategory,setSelectedCategory} = useProjects();

  const list = ["all", "personal", "frontend mentor", "freelancing"];
  const maplist = list.map((item) => {
    return (
      <button
        key={item}
        className={`${
          selectedCategory === item ? "bg-s-color !text-bg-color " : "scale-95 hover:scale-100 hover:bg-s-color hover:text-bg-color"
        } capitalize cursor-pointer sm:not-first:ml-2 max-sm:not-last:mb-2 px-2 py-3 rounded text-p-color bg-n-color/30 max-sm:min-w-20 sm:min-w-35 font-extrabold   transition duration-30`}
        onClick={() => setSelectedCategory(item)}
      >
        {item}
      </button>
    );
  });

  return (
    <>
      <div className="flex justify-center max-sm:flex-col my-10">{maplist}</div>
    </>
  );
}
