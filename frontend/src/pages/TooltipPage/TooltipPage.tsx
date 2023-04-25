import React from "react";
import { Icon, Tooltip, TooltipCustom } from "uikit";
import "./TooltipPage.scss";

export const TooltipPage: React.FC = () => {
  const renderTooltipContent = (): JSX.Element => {
    return <span>This is tooltip!</span>;
  };

  return (
    <section className="TooltipPage">
      <div className="TooltipPage-Block">
        <h2>top</h2>
        <Tooltip message={renderTooltipContent()} placement="top">
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <h2>bottom</h2>
        <Tooltip message={renderTooltipContent()} placement="bottom">
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <h2>right</h2>
        <Tooltip message={renderTooltipContent()} placement="right">
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <h2>right</h2>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip className="Test-Tool" message={renderTooltipContent()} placement="right">
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      <div className="TooltipPage-Block">
        <h2>left</h2>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip className="Test-Tool" message={renderTooltipContent()} placement="left">
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      <div className="TooltipPage-Block">
        <h2>top</h2>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip className="Test-Tool" message={renderTooltipContent()} placement="top">
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      <div className="TooltipPage-Block">
        <h2>bottom</h2>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip className="Test-Tool" message={renderTooltipContent()} placement="bottom">
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      {/*<div className="TooltipPage-Block">*/}
      {/*  <h2>Default tooltip custom on hover</h2>*/}
      {/*  <TooltipCustom content={renderTooltipContent()} placement="right">*/}
      {/*    Hover me*/}
      {/*  </TooltipCustom>*/}
      {/*</div>*/}

      {/*<div className="TooltipPage-Block">*/}
      {/*  <h2>Tooltip custom is clickable</h2>*/}
      {/*  <TooltipCustom behavior="click" content={renderTooltipContent()} placement="top">*/}
      {/*    <div>Click me</div>*/}
      {/*  </TooltipCustom>*/}
      {/*</div>*/}

      {/*<div className="TooltipPage-Block">*/}
      {/*  <h2>Tooltip custom is focusable</h2>*/}
      {/*  <TooltipCustom behavior="focus" content={renderTooltipContent()} placement="bottom">*/}
      {/*    <div>Focus me</div>*/}
      {/*  </TooltipCustom>*/}
      {/*</div>*/}
    </section>
  );
};
