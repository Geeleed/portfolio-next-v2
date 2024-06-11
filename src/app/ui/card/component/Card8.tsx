import React from "react";
import css from "./Card8.module.css";

export default function Card8() {
  return (
    <div className=" relative w-[20rem] h-[25rem] overflow-hidden rounded-lg">
      <div
        className={
          " absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[35rem] aspect-square rounded-full bg-gradient-to-t from-[#ff0000] to-[#ffff00] " +
          css["rotate"]
        }
      ></div>

      <div className=" rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-[98%] bg-[#111] p-5 flex flex-col justify-end">
        <p className={" text-[2rem] font-bold text-[#ccc] "}>Frontend Card</p>
        <div>
          <details>
            <summary className=" text-[#888] hover:underline underline-offset-8 cursor-pointer">
              Description
            </summary>
            <p className=" text-pretty text-[#ddd] text-[0.8rem] leading-snug bg-[#ffffff11] p-2 rounded-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              ex sunt inventore id deleniti accusantium, blanditiis in quaerat
              praesentium porro iste voluptatem illo tempore voluptates placeat
              nisi natus perspiciatis quod!
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
