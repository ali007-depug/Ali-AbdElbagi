import { Link} from "react-router-dom";
import WorkCards from "./WorkCards";
import { ProjcetsProvider } from "../contexts/ProjectsContext";

export default function Work() {
 
  return (
    <div className="px-dyp my-15 pb-30 bg--color relative" id="works">
      {/* section title */}
      <h1 className="text-center font-bold text-dyTitle text-p-color mb-5">
        My Works
      </h1>
      {/* wrapper for cards */}
      <div className="card__wrapper grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[15px]">
        {/* cards */}
        <ProjcetsProvider>
        <WorkCards numberOfCards={5}/>
        </ProjcetsProvider>
      </div>
      {/* view all projcets button */}
      <Link to={"/works"}>
        <button className="absolute right-10 bottom-5 p-5 bg-p-color text-bg-color font-bold rounded cursor-pointer hover:bg-s-color hover:text-bg-color">
          Explore My Works 
        </button>
      </Link>
    </div>
  );
}

