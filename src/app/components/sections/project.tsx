import PreviewItem from "../previewItem";

const Project = () => {
  return (
    <section id="project" className="container mx-auto py-16 sm:py-10">
      <div className="text-center mb-8">
        <h3>PROJECT</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PreviewItem name="Personal Website" background="/images/main.webp" />
        <PreviewItem name="VizDwell" background="/images/vizdwell.png" />
        <PreviewItem name="Statify" background="/images/landing.webp"/>
        <PreviewItem name="Wordzzle" background="/images/seungjun-lee-front-end-project-main.webp"/>
      </div>
    </section>
  );
};

export default Project;
