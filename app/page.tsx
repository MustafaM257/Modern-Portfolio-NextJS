import Image from "next/image";

import Header from "./components/shared/Header";
import Home from "./components/Home";
import Container from "./components/shared/Container";
export default function Page() {
  return (
    <main className="bg-black text-neutral-100 ">
      <Header />
      <Home />
      <Container id="about" title="About">
        Lorem ipsum of an about
      </Container>
    </main>
  );
}
