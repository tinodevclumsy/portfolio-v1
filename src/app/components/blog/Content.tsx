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
      [BLOCKS.HEADING_2]: (node, children) => (
        <h3 className="text-3xl mt-6 mb-4 font-semibold">{children}</h3>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-2xl mt-6 mb-4 font-semibold">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h3 className="text-xl mt-6 mb-4 font-semibold">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="my-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="my-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className="list-disc text-sm ml-3">{children}</li>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {children}
          </a>
        );
      },
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-gray-300 bg-gray-500 px-4 py-2 italic text-gray-100 my-6">
          {children}
        </blockquote>
      ),
    },
    renderMark: {
      code: (text) => {
        const htmlContent = hljs.highlightAuto(text).value;
        return (
          <pre className="theme-atom-one-dark shadow-3xl text-sm relative my-8">
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
