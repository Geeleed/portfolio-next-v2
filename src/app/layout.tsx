import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surasak Kaewpho",
  description: "Portfolio v.2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svg/logo.svg" />
      </head>
      <body className={inter.className}>
        {/* <div className="flex">
          <div className="flex flex-col h-[100vh] bg-[--color2] justify-center z-10">
            <Btn1 href="/home">Home</Btn1>
            <Btn1 href="/briefme">Brief me</Btn1>
            <Btn1 href="/experience">Experience</Btn1>
            <Btn1 href="/project">Project</Btn1>
            <Btn1 href="contact">Contact</Btn1>
          </div>
          {children}
        </div> */}
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
