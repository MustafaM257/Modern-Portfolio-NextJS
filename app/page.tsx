import Image from "next/image";

import Header from "./components/Header";
import Home from "./components/Home";
import Container from "./components/shared/Container";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Links from "./components/shared/Links";
export default function Page() {
  return (
    <main className=" text-neutral-100 ">
      <Header />
      <Home />
      <About />
      <Links />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
