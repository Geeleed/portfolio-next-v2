"use client";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

export default function Add() {
  const theme = useAppSelector((state: RootState) => state.theme_.theme);
  return (
    <div
      className=" flex justify-center absolute w-full h-full bg-fixed"
      style={{ backgroundColor: theme.c1 }}
    >
      <div
        className=" p-4 flex flex-col gap-2 absolute h-full w-full lg:w-2/3"
        style={{ backgroundColor: theme.c1 }}
      >
        <input
          type="text"
          placeholder="title..."
          className=" p-4 outline-none rounded-md text-[1.5rem]"
          style={{ backgroundColor: theme.c10, color: theme.c1 }}
        />
        <input
          type="text"
          placeholder="source link..."
          className=" px-4 py-3 outline-none rounded-md "
          style={{ backgroundColor: theme.c10, color: theme.c1 }}
        />
        <input
          type="text"
          placeholder="demo link..."
          className=" px-4 py-3 outline-none rounded-md "
          style={{ backgroundColor: theme.c10, color: theme.c1 }}
        />
        <input
          type="text"
          placeholder="image link..."
          className=" px-4 py-3 outline-none rounded-md "
          style={{ backgroundColor: theme.c10, color: theme.c1 }}
        />
        <input
          type="text"
          placeholder="tags... ex: app or web,api,tool"
          className=" px-4 py-3 outline-none rounded-md "
          style={{ backgroundColor: theme.c10, color: theme.c1 }}
        />
        <textarea
          cols={30}
          rows={10}
          placeholder="some detail..."
          style={{ backgroundColor: theme.c10, color: theme.c1 }}
          className=" p-4 outline-none rounded-md h-full "
        />
        <input
          type="password"
          placeholder="admin password for upload data"
          className=" px-4 py-3 outline-none rounded-md "
          style={{ backgroundColor: theme.c10, color: theme.c1 }}
        />
        <button
          className=" text-center p-2 text-[1.5rem] rounded-md hover:opacity-90"
          style={{ backgroundColor: theme.c30 }}
        >
          Submit
        </button>
        <Link
          href={"/kaewpho"}
          className=" text-center p-2 text-[1.5rem] rounded-md hover:opacity-90"
          style={{ backgroundColor: theme.c30 }}
        >
          Back
        </Link>
      </div>
    </div>
  );
}
