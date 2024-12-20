import PreviewItem from "../common/PreviewItem";

interface ExperienceTemplateProps {
  companyName: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  stack?: string[];
  image?: string[];
}

const ExperienceTemplate: React.FC<ExperienceTemplateProps> = ({
  companyName,
  position,
  location,
  duration,
  description,
  stack,
  image,
}) => {
  return (
    <div className="max-w-5xl mx-auto pt-56 pb-40">
      <div>
        <div className="detail-header border-b-2 border-blue-900 pb-10 mb-10">
          <h1 className="text-3xl font-semibold">{position}</h1>
          <h3 className="text-xl">{companyName}</h3>
          <div className="text-xs text-stone-400 mt-3">
            <p>{location}</p>
            <p>{duration}</p>
          </div>
        </div>

        <ul className="mb-10">
          {description.map((ele, index) => (
            <li className="list-disc text-sm ml-3" key={`description-${index}`}>
              {ele}
            </li>
          ))}
        </ul>

        <ul className="flex gap-4 flex-wrap">
          {stack?.map((ele, index) => (
            <li
              className="text-sm py-1 px-2 rounded-md bg-blue-900"
              key={`stack-${index}`}
            >
              {ele}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
        {image?.map((ele, index) => (
          <PreviewItem key={`image-${index}`} background={ele} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTemplate;
