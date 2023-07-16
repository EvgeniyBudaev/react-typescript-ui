import clsx from "clsx";
import { memo, useEffect, useState, useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";
import { Icon, TRANSITION } from "uikit";
import "./Accordion.scss";

type TProps = {
  className?: string;
  dataTestId?: string;
  isActive?: boolean;
  title?: string;
} & PropsWithChildren;

const AccordionComponent: FC<TProps> = ({
  className,
  dataTestId = "uikit__accordion",
  isActive = false,
  title = "",
  children = null,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const nodeRef = useRef<HTMLDivElement>(null);
  const contentHeight = nodeRef.current?.scrollHeight;

  const handleToggleAccordion = () => {
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
      data-testid={dataTestId}
    >
      <div className="Accordion-Header" onClick={handleToggleAccordion}>
        <div className="Accordion-HeaderTitle">{title}</div>
        <Icon className="Accordion-HeaderIcon" type="ArrowDown" />
      </div>

      <CSSTransition
        classNames="Accordion-ContentWrapper"
        in={isOpen}
        nodeRef={nodeRef}
        timeout={TRANSITION}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <div className="Accordion-Content">{children}</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export const Accordion = memo(AccordionComponent);
