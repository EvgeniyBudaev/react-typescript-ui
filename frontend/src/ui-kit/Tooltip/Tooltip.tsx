import React, { memo, ReactNode, useMemo, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import "./Tooltip.scss";

export type TooltipPlacementType = "top" | "bottom" | "left" | "right";
export type TooltipBehaviorType = "click" | "focus" | "hover";
export enum TOOLTIP_BEHAVIOR {
  CLICK = "click",
  FOCUS = "focus",
  HOVER = "hover",
}

export interface ITooltipProps {
  behavior?: TooltipBehaviorType;
  children: ReactNode;
  className?: string;
  content: JSX.Element;
  placement: TooltipPlacementType;
}

export const TooltipComponent: React.FC<ITooltipProps> = ({
  behavior = TOOLTIP_BEHAVIOR.HOVER,
  children,
  className,
  content,
  placement,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  const showTooltip = useMemo(() => {
    if (behavior === TOOLTIP_BEHAVIOR.CLICK) {
      return isClicked;
    } else if (behavior === TOOLTIP_BEHAVIOR.FOCUS) {
      return isFocused;
    } else {
      return isHovered;
    }
  }, [behavior, isClicked, isFocused, isHovered]);

  const handleOutsideClick = e => {
    if (targetRef.current) {
      if (targetRef.current.contains(e.target)) {
        return;
      }
      setIsClicked(false);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    if (behavior === TOOLTIP_BEHAVIOR.CLICK) {
      if (!isClicked) {
        document.addEventListener("click", handleOutsideClick, false);
      } else {
        document.removeEventListener("click", handleOutsideClick, false);
      }
      setIsClicked(!isClicked);
    } else {
      if (targetRef.current) {
        targetRef.current.blur();
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={classNames("Tooltip", className)}>
      <button
        className={classNames("Tooltip_Target", {
          Tooltip_Target__showOnFocus: isFocused,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        ref={targetRef}
      >
        {children}
      </button>
      <CSSTransition
        in={showTooltip}
        timeout={200}
        classNames="Tooltip_Transition"
        unmountOnExit
      >
        <div
          className={classNames(
            "Tooltip_CenterContainer",
            `Tooltip_CenterContainer__${placement}`
          )}
        >
          <div
            className={classNames(
              "Tooltip_Content",
              `Tooltip_Content__${placement}`
            )}
          >
            {content}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export const Tooltip = memo(TooltipComponent);
