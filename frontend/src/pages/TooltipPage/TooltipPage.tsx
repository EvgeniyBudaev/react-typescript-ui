import React from "react";
import { Tooltip } from "ui-kit";
import "./TooltipPage.scss";

export const TooltipPage: React.FC = () => {
  const renderTooltipContent = (): JSX.Element => {
    return <span>This is tooltip!</span>;
  };

  return (
    <section className="TooltipPage">
      <h2>Default tooltip on hover</h2>
      <Tooltip content={renderTooltipContent()} placement="right">
        Hover me
      </Tooltip>
      <hr />

      <h2>Tooltip is clickable</h2>
      <Tooltip
        behavior="click"
        content={renderTooltipContent()}
        placement="right"
      >
        <div>Click me</div>
      </Tooltip>
      <hr />

      <h2>Tooltip is focusable</h2>
      <Tooltip
        behavior="focus"
        content={renderTooltipContent()}
        placement="right"
      >
        <div>Focus me</div>
      </Tooltip>
    </section>
  );
};
