"use client";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export default function Message() {
  const theme = useAppSelector((state: RootState) => state.theme_.theme);
  const senderRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  async function lineMsg(e: any) {
    e.preventDefault();
    if (senderRef.current?.value && msgRef.current?.value) {
      const data = {
        title: senderRef.current?.value,
        text: msgRef.current?.value,
      };
      fetch(process.env.SEND_MSG_ENDPOINT || "", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch((e) => console.error(e));
      senderRef.current!.value = "";
      msgRef.current!.value = "";
      alert("Thank you.");
      return router.push("/");
    } else {
      alert("No message...");
      return;
    }
  }
  return (
    <div
      className=" absolute h-full w-full flex justify-center"
      style={{ backgroundColor: theme.c1 }}
    >
      <div
        className=" p-4 flex flex-col gap-2 absolute h-full w-full lg:w-2/3"
        style={{ backgroundColor: theme.c1 }}
      >
        <input
          ref={senderRef}
          type="text"
          placeholder="sender contact..."
          className=" p-4 outline-none rounded-md text-[1.5rem]"
          style={{ backgroundColor: theme.c10, color: theme.c1 }}
        />
        <textarea
          ref={msgRef}
          cols={30}
          rows={10}
          placeholder="message content..."
          style={{ backgroundColor: theme.c10, color: theme.c1 }}
          className=" p-4 outline-none rounded-md h-full text-[1.2rem]"
        />
        <button
          onClick={(e) => lineMsg(e)}
          className=" text-center p-2 text-[1.5rem] rounded-md"
          style={{ backgroundColor: theme.c30 }}
        >
          Send
        </button>
        <Link
          href={"/"}
          className=" text-center p-2 text-[1.5rem] rounded-md"
          style={{ backgroundColor: theme.c30 }}
        >
          Back
        </Link>
      </div>
    </div>
  );
}
