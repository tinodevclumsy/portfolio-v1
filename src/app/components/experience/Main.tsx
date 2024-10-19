import Link from "next/link";

const Experience = () => {
  const listItemStyle = "border-b-2 border-blue-900";
  const listLinkStyle = "block text-lg w-full py-2";
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
          <li className={listItemStyle}>
            <Link className={listLinkStyle} href="/experience/onikon">
              ONIKON Creative Inc. <br />
              Front Web Developer <br />
              <span className="text-xs text-stone-400">
                Surrey, British Columbia, Canada
              </span>
              <br />
              <span className="text-xs text-stone-400">
                Aug 2020 - May 2023
              </span>
            </Link>
          </li>
          <li className={listItemStyle}>
            <Link className={listLinkStyle} href="/experience/vinple">
              Vinple <br />
              Front End Developer <br />
              <span className="text-xs text-stone-400">Vancouver, British Columbia, Canada</span><br />
              <span className="text-xs text-stone-400">Dec 2018 - Jul 2020</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
