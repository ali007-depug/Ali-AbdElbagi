import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function MarkdownRendering({ content }: { content: string }) {
  // Fix contentful img URLs: //images.ctfassets.net/... to https://images.ctfassets.net/...
  const fixedContent = content.replace(
    /\!\[(.*?)\]\(\/\/(.*?)\)/g,
    "![$1](https://$2)"
  );

  return (
    <div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          // add https to img src if missing
          img: ({ src, alt }) => {
            const fixedSrc = src?.startsWith("//") ? "https:" + src : src;
            return (
              <img
                src={fixedSrc}
                alt={alt}
                className="max-w-full rounded-md my-4"
              />
            );
          },
          code: CodeBlock,
        }}
      >
        {fixedContent}
      </ReactMarkdown>
    </div>
  );
}

//code block
function CodeBlock({ inline, className, children }: any) {
  const [copied, setCopied] = useState(false);

  //   language-xxxx
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  const codeText = String(children).replace(/\n$/, "");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (inline) {
    return <code className="bg-gray-200 rounded px-1 py-0.5">{children}</code>;
  }

  return (
    <div className="relative group my-4">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
        <span className="block absolute top-2 left-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{language}</span>
        <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}  // ✅ VS CODE COLOR THEME
        showLineNumbers
        customStyle={{
          borderRadius: "8px",
          padding: "30px 15px",
          fontSize:'20px',
        }}
      >
        {codeText}
      </SyntaxHighlighter>
    </div>
  );
}
