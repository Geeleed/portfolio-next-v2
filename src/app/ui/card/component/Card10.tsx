import React from "react";

export default function Card10() {
  return (
    <div className=" size-[24rem] flex justify-center items-center bg-[#f1f1f1] w-full h-full p-8">
      <div
        className=" w-[16rem] h-[20rem] flex justify-center items-center border-2 border-[hsla(0,0%,100%,0)] 
        rounded-[20px] bg-[#f1f1f1] shadow-[-8px_-6px_15px_0_#fff,6px_8px_15px_0_rgba(0,0,0,0.15)]
         text-gray-500 text-[1.2rem] cursor-pointer active:shadow-[-8px_-7px_10px_0_#fff_inset,7px_8px_10px_0_rgba(0,0,0,0.15)_inset]
          hover:border-[hsla(0,0%,100%,0.5)] active:border-none"
      >
        Card
      </div>
    </div>
  );
}
