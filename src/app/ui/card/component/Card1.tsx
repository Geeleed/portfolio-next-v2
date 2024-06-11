import React from "react";

export default function Card1() {
  return (
    <div className=" group relative w-[24rem] aspect-[1.62] transition-all duration-500 *:transition-all *:duration-500">
      <div className=" absolute group-hover:rotate-[-2deg] top-0 left-0 w-full h-full rounded-xl bg-[#F72798]"></div>
      <div className=" absolute group-hover:rotate-[5deg] w-full h-full overflow-hidden rounded-xl border border-[#C7365988] *:transition-all *:duration-500">
        <div className="absolute top-[3rem] right-[0rem] size-[6rem] rounded-full bg-[#F57D1F] group-hover:-translate-x-[20rem]"></div>
        <div className="absolute bottom-[3rem] left-[0rem] size-[8rem] rounded-full bg-[#EBF40088] group-hover:translate-x-[20rem] group-hover:bg-[#EBF400]"></div>
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] aspect-[1.62] rounded-xl bg-[#15151588] backdrop-blur-2xl flex flex-col justify-center items-center">
          <h1 className=" text-[3rem] font-bold text-[#fff] leading-none">
            HELLO
          </h1>
          <hr className=" border w-1/2 border-[#EEEEEE] my-2 rounded-lg" />
          <h1 className=" text-[0.9rem] text-[#EEEEEE]">Frontend card</h1>
        </div>
      </div>
    </div>
  );
}
