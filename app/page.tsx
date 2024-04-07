import Image from "next/image";

import Header from "./components/Header";
import Home from "./components/Home";
import Container from "./components/shared/Container";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function Page() {
  return (
    <main className="bg-black text-neutral-100 ">
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
