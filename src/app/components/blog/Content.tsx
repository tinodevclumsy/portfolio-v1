"use client";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { Document, BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface ContentProps {
  content: Document;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node.content[0]?.marks?.some((mark) => mark.type === "code")) {
          return children;
        }

        return <p>{children}</p>;
      },
    },
    renderMark: {
      code: (text) => {
        const htmlContent = hljs.highlightAuto(text).value;
        return (
          <pre className="theme-atom-one-dark shadow-3xl text-sm relative mb-8">
            <span className="hljs block p-4">
              <code dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </span>
          </pre>
        );
      },
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
};

export default Content;
