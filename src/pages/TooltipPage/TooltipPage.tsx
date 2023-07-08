import React from "react";
import { Title } from "components";
import { Icon, Tooltip } from "uikit";
import "./TooltipPage.scss";

export const TooltipPage: React.FC = () => {
  const renderTooltipContent = (): JSX.Element => {
    return <span>This is tooltip!</span>;
  };

  return (
    <section className="TooltipPage">
      <div className="TooltipPage-Block">
        <Title>Tooltip hover top</Title>
        <Tooltip
          classes={{ referenceElement: "TooltipPage-Inline", tooltip: "TooltipPage-Tooltip" }}
          message={renderTooltipContent()}
          placement="top"
        >
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <Title>Tooltip hover bottom</Title>
        <Tooltip
          classes={{ referenceElement: "TooltipPage-Inline", tooltip: "TooltipPage-Tooltip" }}
          message={renderTooltipContent()}
          placement="bottom"
        >
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <Title>Tooltip hover right</Title>
        <Tooltip
          classes={{ referenceElement: "TooltipPage-Inline", tooltip: "TooltipPage-Tooltip" }}
          message={renderTooltipContent()}
          placement="right"
        >
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <Title>Tooltip click top</Title>
        <Tooltip
          classes={{ referenceElement: "TooltipPage-Inline", tooltip: "TooltipPage-Tooltip" }}
          behavior="click"
          message={renderTooltipContent()}
          placement="top"
        >
          Click me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <Title>Tooltip hover right</Title>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip
            classes={{ referenceElement: "TooltipPage-Inline", tooltip: "TooltipPage-Tooltip" }}
            message={renderTooltipContent()}
            placement="right"
          >
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      <div className="TooltipPage-Block">
        <Title>Tooltip hover left</Title>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip
            classes={{ referenceElement: "TooltipPage-Inline", tooltip: "TooltipPage-Tooltip" }}
            message={renderTooltipContent()}
            placement="left"
          >
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      <div className="TooltipPage-Block">
        <Title>Tooltip hover top</Title>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip
            classes={{ referenceElement: "TooltipPage-Inline", tooltip: "TooltipPage-Tooltip" }}
            message={renderTooltipContent()}
            placement="top"
          >
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      <div className="TooltipPage-Block">
        <Title>Tooltip hover bottom</Title>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip
            classes={{ referenceElement: "TooltipPage-Inline", tooltip: "TooltipPage-Tooltip" }}
            message={renderTooltipContent()}
            placement="bottom"
          >
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>
    </section>
  );
};
