import React, { ReactNode } from "react";
import "./AccordionGroup.scss";

export interface IAccordionGroupProps {
  label?: string;
  children?: ReactNode;
}

export const AccordionGroup: React.FC<IAccordionGroupProps> = ({
  label = "",
  children,
}) => {
  return (
    <div className="AccordionGroup">
      {label && <div className="AccordionGroup-Label">{label}</div>}
      {children}
    </div>
  );
};
