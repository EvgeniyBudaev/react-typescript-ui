import React, { ReactNode } from "react";
import "./AccordionGroup.scss";

export interface IAccordionGroupProps {
  title?: string;
  children?: ReactNode;
}

export const AccordionGroup: React.FC<IAccordionGroupProps> = ({
  title = "",
  children,
}) => {
  return (
    <div className="AccordionGroup">
      {title && <div className="AccordionGroup-Label">{title}</div>}
      {children}
    </div>
  );
};
