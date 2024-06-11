import React from "react";

export default function Card7() {
  return (
    <div className=" relative w-[20rem] aspect-square group">
      <div className=" absolute top-0 left-0 w-full h-full bg-[#ddd]"></div>
      <div
        className=" absolute top-0 left-0 w-full h-full bg-[#111] border-[5px] border-[#ddd] 
      hover:-translate-x-3 hover:-translate-y-3 transition-all flex flex-col justify-center items-center p-5 text-center"
      >
        <p className=" text-[3rem] font-bold text-[#ddd]">HELLO</p>
        <p className=" leading-none text-[0.8rem] text-[#888]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          obcaecati
        </p>
        <button className=" h-0 overflow-hidden group-hover:h-[1.5rem] group-hover:mt-2 hover:underline underline-offset-4 transition-all delay-300 text-[#ddd] ">
          see more
        </button>
      </div>
    </div>
  );
}
