import clsx from "clsx";
import { createElement, memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";

import { useMounted } from "uikit";
import { ETooltipBehavior } from "./enums";
import type { TClasses, TModifiers, TPlacement, TTooltipBehaviorType } from "./types";
import { getTooltipOffset } from "./utils";
import "./Tooltip.scss";

export type TTooltipProps = {
  as?: string;
  behavior?: TTooltipBehaviorType;
  children?: ReactNode;
  classes?: TClasses;
  dataTestId?: string;
  isOpen?: boolean;
  isVisible?: boolean;
  message: string | React.ReactElement;
  modifiers?: TModifiers;
  placement?: TPlacement;
  timerDelay?: number;
};

const TooltipComponent: FC<TTooltipProps> = ({
  as = "div",
  behavior = ETooltipBehavior.Hover,
  children,
  classes,
  dataTestId = "uikit__tooltip",
  isOpen,
  isVisible = false,
  message,
  modifiers,
  placement = "right",
  timerDelay = 100,
}) => {
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(isVisible);
  const isManualVisibility = typeof isOpen !== "undefined";
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>();
  const hasMounted = useMounted();

  let popperModifiers: TModifiers = [
    {
      name: "arrow",
      options: {
        element: arrowElement,
        padding: 12,
      },
    },
    {
      name: "offset",
      options: {
        offset: getTooltipOffset({ placement, referenceElement }),
      },
    },
    {
      name: "preventOverflow",
      options: {
        altBoundary: true,
      },
    },
  ];

  useEffect(() => {
    const listener = () => setVisible(false);
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  }, []);

  if (modifiers) {
    popperModifiers = popperModifiers.concat(modifiers);
  }

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: popperModifiers,
    placement,
  });

  const handleOutsideClick = (event) => {
    if (referenceElement) {
      if (referenceElement.contains(event.target)) {
        return;
      }
      const newTimer = setTimeout(() => setVisible(false), timerDelay);
      setTimer(newTimer);
    }
  };

  const handleClick = () => {
    if (!isManualVisibility && behavior === ETooltipBehavior.Click) {
      if (!visible) {
        document.addEventListener("click", handleOutsideClick, false);
      } else {
        document.removeEventListener("click", handleOutsideClick, false);
      }
      setVisible((prevState) => !prevState);
      clearTimeout(timer);
    }
  };

  const handleMouseOver = () => {
    if (!isManualVisibility && behavior === ETooltipBehavior.Hover) {
      setVisible(true);
      clearTimeout(timer);
    }
  };

  const handleMouseLeave = () => {
    if (behavior === ETooltipBehavior.Hover) {
      const newTimer = setTimeout(() => setVisible(false), timerDelay);
      setTimer(newTimer);
    }
  };

  const handleInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const props = {
    className: classes?.tooltip,
    datatestid: dataTestId,
  };

  const renderChildren = () => {
    return (
      <>
        <div
          className={classes?.referenceElement}
          data-testid="tooltip__ref-element"
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          ref={setReferenceElement}
        >
          {children}
        </div>

        {hasMounted &&
          visible &&
          message &&
          ReactDOM.createPortal(
            <div
              className={clsx("Tooltip-PoperElement", classes?.popperElement)}
              data-testid="tooltip__popper-element"
              onClick={handleInnerClick}
              onMouseLeave={handleMouseLeave}
              onMouseOver={handleMouseOver}
              ref={setPopperElement}
              style={{
                ...styles.popper,
              }}
              {...attributes.popper}
            >
              <div
                className={clsx("Tooltip-PoperContentElement", classes?.popperContent)}
                data-testid="tooltip__popper-content-element"
              >
                {message}
                <div
                  className={clsx("Tooltip-Arrow", classes?.arrow)}
                  ref={setArrowElement}
                  style={styles.arrow}
                />
              </div>
            </div>,
            document.body,
          )}
      </>
    );
  };

  return createElement(as, props, renderChildren());
};

TooltipComponent.displayName = "Tooltip";

export const Tooltip = memo(TooltipComponent);
