import { useState } from "react";
export default function Sidepanel(){
  const [showSidePanel, setShowSidePanel] = useState(false);

    // to show left sidepanel
    function showLeftInfo() {
        setShowSidePanel(!showSidePanel);
      }
    
    return(
        <div
          className={`fixed top-20 w-[350px] rounded  bg-s-color px-20 transition-all duration-300 ease-in-out z-99 ${
            !showSidePanel ? "left-[-345px]" : "left-[-10px]"
          }`}
        >
          <h3 className="text-2xl text-bg-color font-bold my-3 ">
            Hello i'am <span className="text-white  font-extrabold">Ali</span>{" "}
            🙋‍♂️
          </h3>
          <h4 className="text-white font-bold">I'am a :</h4>
          <ul className="space-y-1 text-white  rounded py-4 w-fit [&_li]:font-bold">
            <li>Web Developer 🖱️</li>
            <li>Computer Enginner 🖥️</li>
            <li>Writer ✍️</li>
            <li>Reader 📚</li>
          </ul>
          {/* right arrow */}
          {/* when user open it .. it should change it's direction to be the oppesite */}
          <div
            className={`bg-bg-color shadow-md rounded-full absolute right-[-35px] top-[calc(190px/2)] w-[29px] h-[30px] p-5 cursor-pointer`}
            onClick={showLeftInfo}
          >
            <div
              className={`size-5 relative top-[-10px] 
  border-[3px] border-t-p-color border-r-p-color border-l-0 border-b-0 
  rounded-tl-none transition-all duration-300 ease-in-out ${
    !showSidePanel
      ? "rotate-[40deg] left-[-15px]"
      : "rotate-[220deg] left-[-7px]"
  }`}
            ></div>
          </div>
        </div>
    )
}