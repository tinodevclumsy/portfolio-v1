"use client";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface ContentProps {
  content: Document;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return <>{documentToReactComponents(content)}</>;
};

export default Content;
