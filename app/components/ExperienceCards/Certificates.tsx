"use client";
import React from "react";
import DeepLearningAIImage from "@/public/assets/DeepLearningAI.png";
import EsriImage from "@/public/assets/ESRI.png";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

const certificates_lists = [
  {
    title: "ChatGPT Prompt Engineering for Developers",
    company: "DeepLearning.AI",
    period: "2024",
    image: DeepLearningAIImage,
  },
  {
    title: "ESRI ArcGIS Pro: Essential Workflow",
    company: "ESRI",
    period: "2023",
    image: EsriImage,
  },
];
export function Certificates() {
  return (
    <div>
      <div className=" max-w-4xl mx-auto space-y-6">
        <h1 className="experience-title ">Certificates</h1>
        {certificates_lists.map((certificate, idx) => (
          <BackgroundGradient
            key={idx}
            className="rounded-2xl w-full p-4 sm:p-10 bg-black flex flex-row items-center justify-between"
          >
            <div>
              <p className="text-base sm:text-xl  mt-4 mb-2 text-white">
                {certificate.title}
              </p>
              <p className="text-base font-semibold sm:text-xl  mb-2 text-white">
                {certificate.company}
              </p>
              <p className="text-sm text-neutral-100">{certificate.period}</p>
            </div>
            <Image
              src={certificate.image}
              alt={certificate.title}
              className="rounded-2xl justify-self-start"
              width={42}
              height={42}
            />
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
export default Certificates;
