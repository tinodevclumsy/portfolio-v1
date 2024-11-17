import ProjectTemplate from "@/app/components/template/ProjectTemplate";

export const metadata = {
  title: "Statify - Seungjun Lee Front-end Developer in Metro Vancouver",
};

const Page = () => {
  const data = {
    projectName: "Statify",
    detail:
      "A project using the Spotify API to generate a topster from personal playlists, visualizing favorite albums or songs in a grid format.",
    description: [],
    stack: ["React.js", "Context API", "Spotify API"],
    image: [
      "/images/project/statify/landing.webp",
      "/images/project/statify/playlist.webp",
      "/images/project/statify/board.webp",
      "/images/project/statify/sample.webp",
    ],
  };
  return (
    <div className="min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
      <ProjectTemplate {...data} />
    </div>
  );
};

export default Page;
