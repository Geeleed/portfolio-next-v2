"use client";
import React, { useEffect, useState } from "react";
import Card1 from "./component/Card1";
import Card2 from "./component/Card2";
import Card4 from "./component/Card4";
import Card5 from "./component/Card5";
import Card6 from "./component/Card6";
import Card7 from "./component/Card7";
import Card8 from "./component/Card8";
import Card9 from "./component/Card9";
import Card10 from "./component/Card10";
import Card11 from "./component/Card11";
import css from "./component/Card8.module.css";

export default function CardShow() {
  const [code, setCode] = useState("");
  const f = async () => {
    await fetch("/card/api")
      .then((res) => res.json())
      .then((res) => {
        setCode(res.code);
      });
  };
  useEffect(() => {
    f();
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-[5%] gap-10 place-items-center bg-[#222] text-white overflow-x-hidden text-[1rem]">
        {/* <Card1 /> */}
        <Card2 />
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
        <Card8 />
        <Card9 />
        <Card10 />
        <Card11 />
      </div>
    </div>
  );
}
