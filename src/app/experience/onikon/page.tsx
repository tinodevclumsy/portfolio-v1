import ExperienceTemplate from "@/app/components/template/ExperienceTemplate";

const Page = () => {
  const data = {
    companyName: "Onikon",
    position: "Front Web Developer",
    location: "Surrey, British Columbia, Canada",
    duration: "Aug 2020 - May 2023",
    description: [
      "Developed and maintained Front-end side on internal CRM project with Vuejs and Vuex",
      "Developed real estate IDX plugin, dashboard and implemented it on websites",
      "Developed an application based on Vuejs and Quasar framework for clients to schedule company's services",
      "Translated UX/UI designs to actual codes",
      "Developed, delivered and maintained interactive and responsive websites with HTML, CSS, JS, JQuery and Wordpress",
      "Created and maintained Wordpress theme, plugins"
    ],
    stack: ["HTML/CSS", "Vue.js", "Vuex/Pinia", "Nuxt.js", "Wordpress/PHP", "jQuery", "Javascript"],
    image: [
      "/images/experience/onikon/portfolio-onikon-01.webp",
      "/images/experience/onikon/portfolio-onikon-02.webp",
      "/images/experience/onikon/portfolio-onikon-03.webp",
      "/images/experience/onikon/portfolio-onikon-04.webp",
      "/images/experience/onikon/portfolio-onikon-05.webp",
      "/images/experience/onikon/portfolio-onikon-06.webp",
      "/images/experience/onikon/portfolio-onikon-07.webp",
    ],
  };
  return (
    <div className="min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
      <ExperienceTemplate {...data} />
    </div>
  );
};

export default Page;
