"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Card6() {
  const [ms, setMs] = useState([0]);
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 15; i++) {
      temp.push(Math.floor(Math.random() * 500));
    }
    setMs(temp);
  }, []);
  return (
    <div>
      <div className=" relative group w-[21rem] h-[27rem] bg-[#111] rounded-2xl overflow-hidden">
        <Image
          src="/image/people.jpg"
          width={400}
          height={400}
          alt="people"
          quality={70}
          loading="lazy"
          className="absolute top-0 group-hover:-translate-y-[4.5rem] transition-all duration-500"
        />
        <p className=" absolute top-[3rem] left-1/2 -translate-x-1/2 opacity-100 group-hover:opacity-0 group-hover:translate-y-10 transition-all duration-500 text-[2rem]">
          CARD
        </p>
        <div className=" absolute bottom-0 translate-y-[100%] w-full h-[60%] overflow-hidden p-5 flex flex-col justify-between duration-500 transition-all group-hover:translate-y-0 bg-[#111111dd]">
          <div>
            <p className=" text-[1.5rem] font-bold mb-5 text-[#ddd]">
              My name is Geeleed
            </p>
            <p className=" text-[0.9rem] text-[#ccc]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quas ipsum architecto nobis unde, vel illo nulla. Earum asperiores
              cum ex veniam deleniti
            </p>
          </div>
          <a href="mailto:example@mail.com" className="text-blue-500">
            {"Email: example@mail.com"}
          </a>
        </div>
      </div>
    </div>
  );
}
