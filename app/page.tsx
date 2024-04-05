import Image from "next/image";

import Header from "./components/shared/Header";
import Home from "./components/Home";
export default function Page() {
  return (
    <main className="bg-neutral-900 h-[600vh]">
      <Header />
      <Home />
    </main>
  );
}
