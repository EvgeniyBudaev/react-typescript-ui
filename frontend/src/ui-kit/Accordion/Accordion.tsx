import React, { useState } from "react";
import classNames from "classnames";
import { SlideDown } from "react-slidedown";
import { Icon } from "ui-kit";
import "react-slidedown/lib/slidedown.css";
import "./Accordion.scss";

export interface IAccordionProps {
  title?: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

export const Accordion: React.FC<IAccordionProps> = ({
  title = "",
  isActive = false,
  children = null,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);

  const toggleAccordion = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div
      className={classNames(
        "Accordion", {
          "Accordion__active": isOpen
        }
      )}
    >
      <div className="Accordion-Header" onClick={toggleAccordion}>
        <div className="Accordion-HeaderTitle">{title}</div>
        <Icon className="Accordion-HeaderIcon" type="ArrowDown" />
      </div>
      <SlideDown className="Accordion-ContentSlideDown">
        {isOpen && <div className="Accordion-Content">{children}</div>}
      </SlideDown>
    </div>
  );
};
