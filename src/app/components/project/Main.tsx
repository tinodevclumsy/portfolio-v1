import Link from "next/link";
import PreviewItem from "../common/PreviewItem";

const Project = () => {
  return (
    <section id="project" className="container mx-auto py-16 sm:py-10">
      <div className="text-center mb-8">
        <h3>PROJECT</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/project/personal-website">
          <PreviewItem name="Personal Website" background="/images/main.webp" />
        </Link>
        <Link href="/project/vizdwell">
          <PreviewItem name="VizDwell" background="/images/vizdwell.png" />
        </Link>
        <Link href="/project/statify">
          <PreviewItem name="Statify" background="/images/landing.webp" />
        </Link>
        <Link href="/project/wordzzle">
          <PreviewItem
            name="Wordzzle"
            background="/images/seungjun-lee-front-end-project-main.webp"
          />
        </Link>
      </div>
    </section>
  );
};

export default Project;
