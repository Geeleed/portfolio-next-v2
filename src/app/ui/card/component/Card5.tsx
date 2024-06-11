import React from "react";

export default function Card5() {
  return (
    <div className=" relative w-[20rem] h-[15rem] perspective-600 group ">
      <div
        className=" absolute top-0 left-0 backface-hidden w-[19rem] h-[14rem] bg-gradient-to-r from-blue-600 to-purple-500 
      transform -rotate-x-180 group-hover:rotate-x-0 transition-all duration-500 flex justify-center items-center p-2"
      >
        <div className=" w-full h-full bg-[#111] p-3 overflow-y-auto">
          <p>Frontend card</p>
          <p className=" text-[0.7rem] my-3 text-[#bbb]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            earum blanditiis dicta ea omnis accusantium quibusdam assumenda
            laborum provident fuga at voluptatem mollitia tempore suscipit
            magnam, modi aut rerum possimus.
          </p>
          <div className=" relative">
            <button className=" absolute right-0 bg-gradient-to-r from-blue-600 to-purple-500 px-5 py-1 rounded transition-all hover:-translate-y-1 hover:drop-shadow-[0px_8px_15px_#2563eb] text-[#111]">
              More...
            </button>
          </div>
        </div>
      </div>
      <div
        className=" absolute top-0 left-0 backface-hidden w-[19rem] h-[14rem] bg-gradient-to-r from-blue-600 to-purple-500 
      transform group-hover:rotate-x-180 transition-all duration-500 flex justify-center items-center text-[2rem] font-bold text-[#111]"
      >
        {"Flip me!"}
      </div>
    </div>
  );
}
