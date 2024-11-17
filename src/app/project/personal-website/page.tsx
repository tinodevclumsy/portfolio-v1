import ProjectTemplate from "@/app/components/template/ProjectTemplate";

export const metadata = {
  title: "Portfolio Website buit in 2023   - Seungjun Lee Front-end Developer in Metro Vancouver",
};

const Page = () => {
  const data = {
    projectName: "Personal Website in 2023",
    detail:
      "The website is created with the purpose of presenting and introducing myself better, showcasing introduction, skills, work, projects and contact information.",
    description: [
    ],
    stack: ["React.js", "Gatsby", "styled-components", "Tailwind CSS"],
    image: [
      "/images/project/portfolio/main.webp",
    ],
  };
  return (
    <div className="min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
      <ProjectTemplate {...data} />
    </div>
  );
};

export default Page;
