import { memo, useEffect, useState, useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";

import { TRANSITION } from "../../constants";
import { Icon } from "../Icon";
import "./Accordion.scss";

type TProps = {
  className?: string;
  isActive?: boolean;
  title?: string;
} & PropsWithChildren;

const Component: FC<TProps> = ({ className, isActive = false, title = "", children = null }) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const nodeRef = useRef<HTMLDivElement>(null);
  const contentHeight = nodeRef.current?.scrollHeight;

  const onToggleAccordion = () => {
    setIsOpen((prev?: boolean) => !prev);
  };

  const setAtToStringAndPx = (value: number): string => {
    return value.toString() + "px";
  };

  useEffect(() => {
    if (nodeRef.current && contentHeight) {
      nodeRef.current.style.setProperty("--content-height", setAtToStringAndPx(contentHeight));
    }
  }, [contentHeight]);

  return (
    <div
      className={clsx("Accordion", className, {
        Accordion__active: isOpen,
      })}
    >
      <div className="Accordion-Header" onClick={onToggleAccordion}>
        <div className="Accordion-HeaderTitle">{title}</div>
        <Icon className="Accordion-HeaderIcon" type="ArrowDown" />
      </div>

      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={TRANSITION}
        classNames="Accordion-ContentWrapper"
        unmountOnExit
      >
        <div ref={nodeRef}>
          <div className="Accordion-Content">{children}</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export const Accordion = memo(Component);
