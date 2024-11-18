import PreviewItem from "../common/PreviewItem";
import Link from "next/link";
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";
interface ProjectTemplateProps {
  projectName: string;
  duration?: string;
  detail: string;
  description: string[];
  stack?: string[];
  image?: string[];
  github?: string;
  url?: string;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  projectName,
  duration,
  description,
  stack,
  image,
  detail,
  github,
  url,
}) => {
  return (
    <div className="max-w-5xl mx-auto pt-56 pb-16">
      <div>
        <div className="detail-header border-b-2 border-blue-900 pb-10 mb-10">
          <h1 className="text-3xl font-semibold">{projectName}</h1>
          <div className="text-base text-stone-400 mt-5">
            <p>{detail}</p>
            <p>{duration}</p>
          </div>

          <div className="link-nav flex gap-3 mt-3">
            {github && (
              <Link href={github} target="_blank">
                <RxGithubLogo size={20} />
              </Link>
            )}
            {url && (
              <Link href={url} target="_blank">
                <RxExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>

        <ul className="mb-10">
          {description.map((ele, index) => (
            <li className="list-disc text-sm ml-4" key={`description-${index}`}>
              {ele}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-4">
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

export default ProjectTemplate;
