import React from "react";
import { ETypographyVariant, Icon, Tooltip, Typography } from "uikit";
import "./TooltipPage.scss";

export const TooltipPage: React.FC = () => {
  const renderTooltipContent = (): JSX.Element => {
    return <span>This is tooltip!</span>;
  };

  return (
    <section className="TooltipPage">
      <div className="TooltipPage-Block">
        <Typography variant={ETypographyVariant.TextH1Medium}>Tooltip top</Typography>
        <Tooltip message={renderTooltipContent()} placement="top">
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <Typography variant={ETypographyVariant.TextH1Medium}>Tooltip bottom</Typography>
        <Tooltip message={renderTooltipContent()} placement="bottom">
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <Typography variant={ETypographyVariant.TextH1Medium}>Tooltip right</Typography>
        <Tooltip message={renderTooltipContent()} placement="right">
          Hover me
        </Tooltip>
      </div>

      <div className="TooltipPage-Block">
        <Typography variant={ETypographyVariant.TextH1Medium}>Tooltip right</Typography>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip className="Test-Tool" message={renderTooltipContent()} placement="right">
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      <div className="TooltipPage-Block">
        <Typography variant={ETypographyVariant.TextH1Medium}>Tooltip left</Typography>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip className="Test-Tool" message={renderTooltipContent()} placement="left">
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      <div className="TooltipPage-Block">
        <Typography variant={ETypographyVariant.TextH1Medium}>Tooltip top</Typography>
        <div className="Test">
          <div className="Test-Text">Text</div>
          <Tooltip className="Test-Tool" message={renderTooltipContent()} placement="top">
            <Icon type={"Edit"} />
          </Tooltip>
        </div>
      </div>

      <div className="TooltipPage-Block">
        <Typography variant={ETypographyVariant.TextH1Medium}>Tooltip bottom</Typography>
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