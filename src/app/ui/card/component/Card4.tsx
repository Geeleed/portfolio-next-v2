import React from "react";

export default function Card4() {
  return (
    <div className=" group relative w-[20rem] h-[25rem] rounded-lg ">
      <div className=" size-[15rem] bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[-2rem_-5rem_100px_#ffff0088] "></div>
      <div className=" size-[15rem] bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[2rem_5rem_100px_#00ff0088] "></div>
      <div
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#00ff00] to-[#ffff00] w-[20rem] h-[25rem] rounded-lg 
      group-hover:rotate-90 group-hover:h-[20rem] group-hover:w-[25rem]
      transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1.2)]"
      ></div>
      <div className="absolute w-[19.2rem] aspect-[20/25] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] text-white p-5 flex flex-col justify-end">
        <p className=" text-[2rem] font-bold leading-none bg-gradient-to-tr from-[#00ff00] to-[#ffff00] text-transparent bg-clip-text transition-all duration-500 delay-200 group-hover:-translate-y-5">
          Hello Card Component
        </p>
        <div className=" w-0 h-1 bg-gradient-to-r from-[#00ff00] to-[#ffff00] rounded-full group-hover:w-full transition-all delay-500 mb-2"></div>
        <p className=" overflow-hidden h-0 transition-all duration-500 delay-700 group-hover:h-[10rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste
          minima tenetur veniam? Quo voluptates maiores tempora, ratione nihil
          unde provident error non
        </p>
        <p className=" text-[#888]">Developed by</p>
        <br />
        <p>Geeleed</p>
      </div>
    </div>
  );
}
