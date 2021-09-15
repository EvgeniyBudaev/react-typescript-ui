import React, { ReactNode } from "react";
import classNames from "classnames";
import "./AccordionGroup.scss";

export interface IAccordionGroupProps {
  className?: string;
  title?: string;
  children?: ReactNode;
}

export const AccordionGroup: React.FC<IAccordionGroupProps> = ({
  className,
  title = "",
  children,
}) => {
  return (
    <div className={classNames("AccordionGroup", className)}>
      {title && <div className="AccordionGroup-Label">{title}</div>}
      {children}
    </div>
  );
};
