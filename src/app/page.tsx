import Landing from "./components/landing/Main";
import About from "./components/about/Main";
import Experience from "./components/experience/Main";
import Project from "./components/project/Main";
import Contact from "./components/contact/Main";

export default function Home() {
  return (
    <>
      <div className="items-center min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
        <main>
          <Landing />
          <About />
          <Experience />
          <Project />
          <Contact />
        </main>
      </div>
    </>
  );
}
