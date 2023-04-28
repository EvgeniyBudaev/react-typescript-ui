import type { ReactNode } from "react";
import ReactDOMServer from "react-dom/server";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import atelierCaveDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
import "./CodeCard.scss";
import { ChildrenComponent } from "./ChildrenComponent";

type TCodeCardProps = {
  children?: ReactNode;
};

export const CodeCard = ({ children }: TCodeCardProps) => {
  return <div className="CodeCard">{children}</div>;
};

type TCodeCardShowcaseExampleProps = {
  children?: ReactNode;
};

CodeCard.ShowcaseExample = ({ children }: TCodeCardShowcaseExampleProps): JSX.Element => {
  return <div className="CodeCard-ShowcaseExample">{children}</div>;
};

type TCodeCardCodeExampleProps = {
  children?: ReactNode;
};

CodeCard.CodeExample = ({ children }: TCodeCardCodeExampleProps): JSX.Element => {
  const codeString = ReactDOMServer.renderToStaticMarkup(<ChildrenComponent children={children} />);

  return (
    <div className="CodeCard-CodeExample">
      <div className="CodeCard-CodeExample-Inner">{codeString}</div>
    </div>
  );
};
