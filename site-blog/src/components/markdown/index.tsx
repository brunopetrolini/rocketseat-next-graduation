import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownProps = {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md md:text-heading-xl">
            {children}
          </h1>
        ),
        p: ({ children }) => (
          <p className="mb-6 text-body-md text-gray-200 leading-relaxed">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="mb-6 space-y-2 pl-4 text-body-md text-gray-200 leading-relaxed">
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li className="relative pl-4 text-body-md text-gray-200 leading-relaxed before:absolute before:left-0 before:text-gray-200 before:content-['•']">
            {children}
          </li>
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-blue-200 hover:underline">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
