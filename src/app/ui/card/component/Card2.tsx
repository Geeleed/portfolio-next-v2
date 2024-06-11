import React from "react";

export default function Card2() {
  return (
    <div className=" relative w-[20rem] aspect-square group">
      <div className=" absolute w-full h-full bg-gradient-to-tr from-[#ff0000] to-[#ffff00] p-2 ">
        <div className=" w-full h-full bg-[#111] drop-shadow-[0px_10px_15px_#ffff0077] transition-all duration-500 group-hover:drop-shadow-none flex justify-center items-center">
          <h1 className=" text-[2rem] font-extrabold bg-gradient-to-tr from-[#ff0000] to-[#ffff00] inline-block text-transparent bg-clip-text drop-shadow-[0px_0px_20px_#ff0000] group-hover:opacity-100 opacity-0 transition-all duration-500">
            HELLO
          </h1>
        </div>
      </div>
    </div>
  );
}
