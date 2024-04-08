import React from "react";
import { Meteors } from "./ui/metors";
import Container from "./shared/Container";
export function Contact() {
  return (
    <Container id="contact" title="Contact Me">
      <div className="">
        <div className=" w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-white  transform scale-[0.80] bg-white rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center  mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Meteors because they&apos;re cool
            </h1>
            <p className="font-normal text-base text-white mb-4 relative z-50">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>
            Btn goes here if needed
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Contact;
