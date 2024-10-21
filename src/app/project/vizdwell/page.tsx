import ProjectTemplate from "@/app/components/template/ProjectTemplate";

const Page = () => {
  const data = {
    projectName: "VizDwell",
    detail:
      "This project is an interactive apartment touring experience built with React Three Fiber and Blender. The 3D models of the apartment, including room layouts, furniture, and textures, were designed in Blender and integrated into the application via glTF. React Three Fiber handles rendering and interaction within the browser, allowing smooth navigation and real-time user control.",
    description: [],
    stack: ["React.js", "Three.js", "styled-components"],
    image: [
      "/images/project/vizdwell/vizdwell-0.png",
      "/images/project/vizdwell/vizdwell-1.png",
    ],
  };
  return (
    <div className="min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
      <ProjectTemplate {...data} />
    </div>
  );
};

export default Page;