import ProjectTemplate from "@/app/components/template/ProjectTemplate";

export const metadata = {
  title: "Wordzzle - Seungjun Lee Front-end Developer in Metro Vancouver",
};

const Page = () => {
  const data = {
    projectName: "Wordzzle",
    detail:
      "The project featured an intuitive frontend with CRUD operations, a backend for data management, secure user authentication using JWT, and interactive quizzes as key features.",
    description: [
      "Frontend: Utilized React and Redux for an intuitive interface with CRUD operations.",
      "Backend: Employed Express and MongoDB for data management.",
      "Authentication: Implemented JWT for secure user logins and personalized content.",
      " Features: Designed interactive quizzes.",
    ],
    stack: ["React.js", "Redux", "Express.js", "MongoDB", "styled-components"],
    image: [
      "/images/project/wordzzle/WORDZZLE_MAIN.webp",
      "/images/project/wordzzle/WORDZZLE_ADD.webp",
      "/images/project/wordzzle/WORDZZLE_EDIT.webp",
      "/images/project/wordzzle/WORDZZLE_LANDING.webp",
      "/images/project/wordzzle/WORDZZLE_LIST.webp",
      "/images/project/wordzzle/WORDZZLE_LOGIN.webp",
      "/images/project/wordzzle/WORDZZLE_NOTIFY.webp",
      "/images/project/wordzzle/WORDZZLE_QUIZ.webp",
      "/images/project/wordzzle/WORDZZLE_REGISTER.webp",
      "/images/project/wordzzle/WORDZZLE_RESULT.webp",
    ],
  };
  return (
    <div className="min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
      <ProjectTemplate {...data} />
    </div>
  );
};

export default Page;
