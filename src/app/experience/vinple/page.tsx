import ExperienceTemplate from "@/app/components/template/ExperienceTemplate";

const Page = () => {
  const data = {
    companyName: "Vinple",
    position: "Front Web Developer",
    location: "Vancouver, British Columbia, Canada",
    duration: "Dec 2018 - Jul 2020",
    description: [
      "Worked in a team developing a communication app for students in BC",
      "Developed and maintained web app with React and mobile application with React Native",
      "Collaborated in agile environment based on Git and Jira",
    ],
    stack: ["React.js", "React Native", "Mobx"],
    image: [
      "/images/experience/vinple/portfolio-base.webp",
    ],
  };
  return (
    <div className="min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
      <ExperienceTemplate {...data} />
    </div>
  );
};

export default Page;
