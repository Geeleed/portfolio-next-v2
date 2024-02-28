"use client";
import React, { useRef } from "react";
import { collection } from "./dev";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

export default function Page() {
  const theme = useAppSelector((state: RootState) => state.theme_.theme);

  return (
    <div
      className=" absolute w-full h-auto top-0 left-0 lg:text-[1.5rem]"
      style={{ backgroundColor: theme.c60, color: theme.c10 }}
    >
      <nav
        className=" w-full px-5 py-2 text-[2rem] lg:text-[4rem] flex justify-between items-center sticky top-0 z-10 lg:px-[16.5%]"
        style={{ backgroundColor: theme.c1, color: theme.c30 }}
      >
        <div className=" leading-none">
          <h3>Surasak Kaewpho</h3>
          <h4 className=" text-[1.1rem] lg:text-[2rem]">Portfolio</h4>
        </div>
        {/* <Link href={"/add"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-plus-square lg:w-[4rem] lg:h-[4rem] active:scale-95 hover:scale-105 transition-all duration-500"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </Link> */}
      </nav>
      <div className=" w-full flex justify-center my-5">
        <section className=" w-full h-full lg:w-2/3 p-5 lg:px-0 flex items-center justify-between text-[0.8rem]">
          <Image
            src={"/png/disk.png"}
            height={800}
            width={800}
            alt=""
            className=" rounded-full w-40 h-40 lg:w-1/4 lg:h-1/4"
          />
          <div className=" flex flex-col justify-end items-center">
            <h3 className=" text-[1.8rem] lg:text-[5rem] leading-none">
              {collection.length}
            </h3>
            <p className=" lg:text-[3rem]">Repos</p>
          </div>
          <Link
            href={"https://github.com/Geeleed"}
            target="_blank"
            className=" flex flex-col justify-end items-center"
          >
            <div className=" lg:h-[5rem]">
              <GitHub />
            </div>
            <p className=" lg:text-[3rem]">Geeleed</p>
          </Link>
          <Link
            href={"/theme"}
            className=" flex flex-col justify-end items-center cursor-pointer"
          >
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-grid-3x3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5V5h4V1zM5 6H1v4h4zm1 4h4V6H6zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4v-4zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11zm0-1h4V6h-4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11zm-1 0V1H6v4z" />
          </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-palette lg:h-[5rem] lg:w-[5rem]"
              viewBox="0 0 16 16"
            >
              <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7" />
            </svg>
            <p className=" lg:text-[3rem]">Theme</p>
          </Link>
        </section>
      </div>

      <div className=" flex w-full justify-center">
        <article
          className=" px-5 py-3 rounded-md text-[0.8rem] lg:w-2/3 lg:text-[1.5rem]"
          style={{ backgroundColor: theme.c60 }}
        >
          <p className=" py-2">
            {`I focus on Next.js to develop the PWAs, use Typescript for logic and
          Tailwind CSS for styling, manage the state by Redux Toolkit, develop
          restApi and connect the mongodb by Express.js/FastApi.`}
          </p>
          <ul className=" flex justify-around lg:justify-start lg:gap-5">
            <li>✓ NextJS</li>
            <li>✓ PWAs</li>
            <li>✓ APIs</li>
            <li>✓ MongoDB</li>
            <li>✓ Redux</li>
            <li>✓ AI</li>
          </ul>
          <Link
            href="mailto: surasak.kwork@gmail.com"
            style={{ color: theme.c30 }}
          >
            {`Email: surasak.kwork@gmail.com`}
          </Link>
          <p style={{ color: theme.c30 }}>{`Mobile: 092-912-4025`}</p>
          <Icons />
        </article>
      </div>
      <div className=" flex justify-center">
        <nav className=" w-full flex justify-between gap-1 my-1 lg:w-2/3">
          <button
            className=" border-2 w-full py-1 transition-all active:scale-95 hover:opacity-75"
            style={{
              backgroundColor: theme.c10,
              borderColor: theme.c1,
              color: theme.c1,
            }}
          >
            Resume
          </button>
          <Link
            href={"/message"}
            className=" border-2 text-center w-full py-1 transition-all active:scale-95 hover:opacity-75"
            style={{
              backgroundColor: theme.c10,
              borderColor: theme.c1,
              color: theme.c1,
            }}
          >
            Message
          </Link>
        </nav>
      </div>
      <nav className=" flex w-full justify-center gap-5 p-4">
        <button>All</button>
        <button>Web</button>
        <button>App</button>
        <button>API</button>
        <button>Tool</button>
      </nav>
      <section className=" relative flex justify-center">
        <main
          className=" grid grid-cols-3 gap-1 lg:w-2/3"
          style={{ backgroundColor: theme.c60 }}
        >
          {collection.map((item, index) => (
            <div
              key={index}
              className=" relative aspect-square flex justify-center items-center text-[3rem] 
              rounded-none overflow-hidden active:scale-[0.97] transition-all "
              style={{ backgroundColor: theme.c1 }}
            >
              <Image
                src={item.image_src}
                height={500}
                width={500}
                alt=""
                // className=" w-full h-full grayscale mix-blend-lighten"
                className=" w-full h-full grayscale mix-blend-hard-light"
              />
              <div
                className=" w-full h-full flex flex-col justify-between text-left transition-all duration-500 opacity-0
                absolute top-0 left-0 text-[1.5rem] lg:text-[2rem] p-2 hover:opacity-100 lg:p-4"
                style={{ color: theme.c1, backgroundColor: theme.c30 }}
              >
                <p className=" text-[0.7rem] lg:text-[2rem]">{item.title}</p>
                <p className=" text-[0.5rem] h-full overflow-auto mb-1 lg:text-[1.5rem] font-[Prompt]">
                  {item.detail}
                </p>
                <div className=" flex justify-center gap-1">
                  <Link
                    className=" hover:invert text-[0.8rem] px-2 rounded-md lg:text-2xl cursor-pointer"
                    style={{ backgroundColor: theme.c1, color: theme.c10 }}
                    href={item.source}
                    target="_blank"
                  >
                    source
                  </Link>
                  <Link
                    className=" hover:invert text-[0.8rem] px-2 rounded-md lg:text-2xl cursor-pointer"
                    style={{ backgroundColor: theme.c1, color: theme.c10 }}
                    href={item.demo}
                    target="_blank"
                  >
                    demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
}

const GitHub = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-github w-full h-full"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
};
const Icons = () => {
  return (
    <nav className=" flex gap-2 overflow-x-auto p-2">
      <Image
        src={"/png/html.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/css.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/js.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/next.png"}
        height={30}
        width={70}
        alt=""
        quality={50}
        className=" flex-none invert w-12 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/tailwind.png"}
        height={30}
        width={70}
        alt=""
        quality={50}
        className=" flex-none w-10 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/ts.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/node.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/mongo.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/python.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/wolfram.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/postman.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/vscode.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
      <Image
        src={"/png/react.png"}
        height={30}
        width={30}
        alt=""
        quality={50}
        className=" flex-none w-8 h-8 grayscale mix-blend-lighten hover:grayscale-0 hover:scale-125"
      />
    </nav>
  );
};
