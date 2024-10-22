const About = () => {
  return (
    <section id="about" className="container mx-auto py-16 sm:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl">
            If you can&#39;t make it good, <br />
            at least make it look good <br />
            <span className="text-xl text-stone-300">- Bill Gates</span>
          </h2>

          <p className="pt-6">
            I am a skilled and dedicated front-end developer with over <b>3 years</b> of
            professional experience. My expertise lies in front-end web
            development, with proficiency in HTML, CSS, JavaScript, Vue.js, and
            React.js and strong interests in mobile development as well.
          </p>
        </div>
        <div className="text-right mt-5">
          <ul>
            <li className="text-5xl text-stroke-sm text-stroke-white">HTML/CSS</li>
            <li className="text-5xl text-stroke-sm text-stroke-white">Javascript</li>
            <li className="text-5xl text-stroke-sm text-stroke-white">Typescript</li>
            <li className="text-5xl text-stroke-sm text-stroke-white">React.js</li>
            <li className="text-5xl text-stroke-sm text-stroke-white">Next.js</li>
            <li className="text-5xl text-stroke-sm text-stroke-white">Vue.js</li>
            <li className="text-5xl text-stroke-sm text-stroke-white">Node.js</li>
            <li className="text-5xl text-stroke-sm text-stroke-white">Wordpress</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
