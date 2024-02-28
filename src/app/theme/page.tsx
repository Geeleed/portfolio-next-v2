"use client";
import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { setTheme } from "@/lib/slices/themeSlice";
import { clpl } from "../dev";

export default function Theme() {
  const theme = useAppSelector((state: RootState) => state.theme_.theme);
  const dispatch = useAppDispatch();
  return (
    <div
      className=" absolute w-full h-full flex justify-center overflow-y-auto"
      style={{ backgroundColor: theme.c60 }}
    >
      <div className=" flex flex-col items-center text-center justify-between h-full gap-5 lg:w-2/3 w-full p-5">
        <div className=" w-full lg:w-1/2 flex flex-col items-center">
          <h1
            className=" lg:text-[4rem] text-[2rem]"
            style={{ color: theme.c10 }}
          >
            Select theme
          </h1>
          <div className=" flex flex-col lg:items-center gap-2 lg:w-[80%] w-full">
            {["theme1", "theme2", "theme3"].map((item) => (
              <section
                onClick={() => dispatch(setTheme(clpl[item]))}
                key={item}
                className=" w-full flex hover:border border-white text-[0.6rem] text-gray-500 hover:scale-110 transition-all cursor-pointer"
              >
                <div
                  style={{ backgroundColor: clpl[item].c1 }}
                  className="w-full aspect-square flex justify-center items-center lg:text-[1rem]"
                >
                  {clpl[item].c1}
                </div>
                <div
                  style={{ backgroundColor: clpl[item].c10 }}
                  className="w-full aspect-square flex justify-center items-center lg:text-[1rem]"
                >
                  {clpl[item].c10}
                </div>
                <div
                  style={{ backgroundColor: clpl[item].c30 }}
                  className="w-full aspect-square flex justify-center items-center lg:text-[1rem]"
                >
                  {clpl[item].c30}
                </div>
                <div
                  style={{ backgroundColor: clpl[item].c60 }}
                  className="w-full aspect-square flex justify-center items-center lg:text-[1rem]"
                >
                  {clpl[item].c60}
                </div>
              </section>
            ))}
          </div>
        </div>
        <Link
          href={"/"}
          className=" text-center p-2 text-[1.5rem] rounded-md lg:w-1/2 w-full"
          style={{ backgroundColor: theme.c30 }}
        >
          Back
        </Link>
      </div>
    </div>
  );
}
