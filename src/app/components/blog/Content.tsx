"use client";
import { Document, BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Text = ({ children }) => <p className="align-center mb-8">{children}</p>;

interface ContentProps {
  content: Document;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
    renderMark: {
      'code': (text) => (
        <code className="bg-gray-100 text-red-600 px-2 py-1 rounded-md font-mono text-sm">
          {text}
        </code>
      ),
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
};

export default Content;
