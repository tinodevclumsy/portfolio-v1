import { GoArrowRight } from "react-icons/go";

type ProjectCardProps = {
  name?: string;
  background: string;
  order: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  background,
  order,
}) => {
  return (
    <div className="aspect-video relative group rounded-md overflow-hidden drop-shadow-md bg-slate-900">
      <div className="absolute w-full top-3 px-5 flex justify-between items-center z-10">
        <h6 className="font-medium transform text-sm text-stone-400 ">
          {order}.
        </h6>
        <div className="border rounded-full  border-zinc-500 p-2 group-hover:-rotate-45 transition-transform duration-300">
          <GoArrowRight />
        </div>
      </div>
      <div
        className="absolute top-0 left-1/2  w-full h-full bg-center bg-no-repeat bg-cover transform -translate-x-1/2"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <h6 className="font-medium absolute bottom-3 left-5 transform text-xl text-stone-200">
        {name}
      </h6>
    </div>
  );
};

export default ProjectCard;
