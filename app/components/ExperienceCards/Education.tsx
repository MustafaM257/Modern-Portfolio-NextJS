"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function Education() {
  return (
    <div>
      <div className=" max-w-4xl mx-auto space-y-6">
        <h1 className="experience-title ">Education</h1>
        <BackgroundGradient className="rounded-2xl w-full p-4 sm:p-10 bg-black">
          <p className="text-base sm:text-xl  mt-4 mb-2 text-white">
            Bachelor of Computer Science
          </p>
          <p className="text-base sm:text-xl  mb-2 text-cyan-400">
            Lebaense University
          </p>
          <p className="text-sm text-neutral-100">
            Related Course Work: Data Structures, Algorithms, Object-Oriented
            Programming, Web Development, Database Management Systems, Software
            Engineering, Operating Systems, Computer Networks, and Security.
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
}
export default Education;
