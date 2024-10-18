import dynamic from "next/dynamic";
import Landing from "./components/sections/landing";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Project from "./components/sections/project";
import Contact from "./components/sections/contact";
const Scene = dynamic(() => import("./components/three/scene"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Scene />
      {/* grid grid-rows-[20px_1fr_20px] */}
      {/* p-8 pb-20 gap-16 sm:p-20 */}
      <div className=" items-center min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
        {/* flex flex-col gap-8 row-start-2 items-center sm:items-start */}
        <main className="">
          <Landing />
          <About />
          <Experience />
          <Project />
          <Contact />
        </main>
      </div>
    </div>
  );
}
