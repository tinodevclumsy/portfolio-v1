type ProjectCardProps = {
  name?: string;
  background: string;
  order: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name, background, order }) => {
  return (
    <div className="pb-64 relative group rounded-md overflow-hidden drop-shadow-md bg-slate-900">
      <h6 className="font-medium absolute top-3 left-5 transform text-sm text-stone-400 z-10">{order}.</h6>
      <div
        className="absolute top-0 left-1/2  w-full h-full bg-center bg-no-repeat bg-cover transform -translate-x-1/2  transition-transform duration-300 ease-in-out group-hover:scale-110"
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
