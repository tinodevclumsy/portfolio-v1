import SocialNav from "../common/SocialNav";

const Landing = () => {
  return (
    <section className="container flex items-center h-screen mx-auto">
      <h1 className="text-6xl pt-32">
        SEUNGJUN LEE <br />
        FRONT-END DEVELOPER <br />
        <span className="text-stroke-sm text-stroke-white">
          BASED IN <br />
          METRO VANCOUVER
        </span>
        <br />
      </h1>
      <SocialNav />
    </section>
  );
};

export default Landing;
