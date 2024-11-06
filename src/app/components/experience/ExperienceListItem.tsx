import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface ExperienceItemProps {
  href: string;
  name: string;
  location: string;
  position: string;
  duration: string;
}

const ExperienceListItem: React.FC<ExperienceItemProps> = ({
  href,
  name,
  location,
  position,
  duration,
}) => {
  const listItemStyle = "border-b-2 border-blue-900";
  const listLinkStyle =
    "flex items-center justify-between text-lg leading-6 w-full py-2 group";

  return (
    <li className={listItemStyle}>
      <Link className={listLinkStyle} href={href}>
        <div>
          {name} <br />
          {position} <br />
          <span className="text-xs text-stone-400">{location}</span>
          <br />
          <span className="text-xs text-stone-400">{duration}</span>
        </div>
        <div className="border rounded-full  border-zinc-500 p-3 group-hover:-rotate-45 transition-transform duration-300">
          <GoArrowRight />
        </div>
      </Link>
    </li>
  );
};

export default ExperienceListItem;
