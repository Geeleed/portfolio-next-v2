import Image from "next/image";
import React from "react";

export default function Card9() {
  return (
    <div className=" relative drop-shadow-[0px_15px_24px_#88888833] hover:drop-shadow-none transition-all duration-500 hover:translate-y-1 group">
      <div className=" overflow-hidden w-[20rem] h-[25rem] bg-[#eee] rounded-3xl ">
        <div className=" overflow-hidden w-full h-1/2">
          <Image
            src="/image/kaichon.jpg"
            height={400}
            width={400}
            quality={70}
            alt="kaichon"
            className=" w-full group-hover:scale-[1.1] transition-all duration-500"
          />
        </div>
        <div className=" text-[#111] p-5 flex h-1/2 flex-col justify-between relative">
          <div>
            <p className=" text-[1.5rem] font-bold">Kaichon</p>
            <p className=" leading-snug text-[0.9rem] text-pretty text-[#333]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In enim
              magni rerum consequuntur
            </p>
          </div>
          <div className=" absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10rem] group-hover:w-[5rem] h-[1.5rem] transition-all duration-500 bg-[#eee] rounded-full drop-shadow-xl"></div>
          <div className=" flex justify-between items-center *:duration-500">
            <div>{"650 ฿"}</div>
            <div>
              <button className=" hover:underline underline-offset-8 w-fit px-5 py-1 text-[0.9rem] rounded-lg hover:drop-shadow-lg hover:-translate-y-1 transition-all">
                Details
              </button>
              <button className=" bg-[#111] text-[#eee] w-fit px-10 py-1 text-[1.1rem] rounded-full drop-shadow-xl hover:-translate-y-1 transition-all">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
