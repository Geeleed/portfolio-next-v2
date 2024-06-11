import React from "react";

export default function Card11() {
  return (
    <div className=" size-[24rem] flex justify-center items-center bg-[#212121] w-full h-full p-8">
      <div
        className=" w-[16rem] h-[20rem] flex justify-center items-center border-2 border-[hsla(0,0%,100%,0)] 
        rounded-[20px] bg-[#212121] shadow-[-8px_-6px_15px_0_rgba(60,60,60,0.5),6px_8px_15px_0_rgb(25,25,25)]
         text-gray-500 text-[1.2rem] cursor-pointer active:shadow-[-8px_-7px_10px_0_rgba(60,60,60,0.5)_inset,7px_8px_10px_0_rgb(25,25,25)_inset]
          hover:border-[#11111133] active:border-none"
      >
        Card
      </div>
    </div>
  );
}
