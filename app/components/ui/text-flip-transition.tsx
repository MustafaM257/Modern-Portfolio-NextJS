"use client";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
const TEXTS = [
  "a Software Engineer",
  "a Full Stack Developer",
  "Mostafa Al Mohammad!",
];

const TextFlipTransition = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        springConfig={presets.wobbly}
        className={`z-20 border-none ${
          TEXTS[index % TEXTS.length] === "Mostafa Al Mohammad!"
            ? "text-cyan-400 shadow-2xl"
            : "text-white"
        }`}
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
};
export default TextFlipTransition;
