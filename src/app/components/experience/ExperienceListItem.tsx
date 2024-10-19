import Link from "next/link";

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
  const listLinkStyle = "block text-lg leading-6 w-full py-2";

  return (
    <li className={listItemStyle}>
      <Link className={listLinkStyle} href={href}>
        {name} <br />
        {position} <br />
        <span className="text-xs text-stone-400">{location}</span>
        <br />
        <span className="text-xs text-stone-400">{duration}</span>
      </Link>
    </li>
  );
};

export default ExperienceListItem;
