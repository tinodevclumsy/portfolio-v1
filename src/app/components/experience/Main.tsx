import ExperienceListItem from "./ExperienceListItem";

const Experience = () => {
  const experiences = [
    {
      href: "/experience/onikon",
      name: "ONIKON Creative Inc.",
      location: "Surrey, British Columbia, Canada",
      position: "Front Web Developer",
      duration: "Aug 2020 - May 2023",
    },
    {
      href: "/experience/vinple",
      name: "Vinple",
      location: "Vancouver, British Columbia, Canada",
      position: "Front End Developer",
      duration: "Dec 2018 - Jul 2020",
    },
  ];

  return (
    <section
      id="experience"
      className="container grid grid-cols-1 md:grid-cols-3  mx-auto py-16 sm:py-10"
    >
      <div className="col-span-1">
        <h3>Experience</h3>
      </div>
      <div className="col-span-2">
        <ul>
          {experiences.map((ele, index) => (
            <ExperienceListItem key={`exp-${index}`} {...ele} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
