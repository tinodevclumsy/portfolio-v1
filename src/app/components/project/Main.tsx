import Link from "next/link";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="project" className="container mx-auto py-16 sm:py-10">
      <div className="text-center mb-8">
        <h3 className="text-4xl uppercase drop-shadow-md">
          Project.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-screen-xl mx-auto">
        <Link href="/project/personal-website">
          <ProjectCard name="Personal Website" background="/images/main.webp" order="01"/>
        </Link>
        <Link href="/project/vizdwell">
          <ProjectCard name="VizDwell" background="/images/vizdwell.png" order="02" />
        </Link>
        <Link href="/project/statify">
          <ProjectCard name="Statify" background="/images/landing.webp" order="03" />
        </Link>
        <Link href="/project/wordzzle">
          <ProjectCard
            name="Wordzzle"
            background="/images/seungjun-lee-front-end-project-main.webp"
            order="04"
          />
        </Link>
      </div>
    </section>
  );
};

export default Project;
