import React, {
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  content: JSX.Element | string;
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
  const nodeRef = useRef(null);

  const showTooltip = useMemo(() => {
    if (behavior === TOOLTIP_BEHAVIOR.CLICK) {
      return isClicked;
    } else if (behavior === TOOLTIP_BEHAVIOR.FOCUS) {
      return isFocused;
    } else {
      return isHovered;
    }
  }, [behavior, isClicked, isFocused, isHovered]);

  const handleOutsideClick = event => {
    if (targetRef.current) {
      if (targetRef.current.contains(event.target)) {
        return;
      }
      setIsClicked(false);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (behavior === TOOLTIP_BEHAVIOR.CLICK) {
      if (!isClicked) {
        document.addEventListener("click", handleOutsideClick, false);
      } else {
        document.removeEventListener("click", handleOutsideClick, false);
      }
      setIsClicked(prevState => !prevState);
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

  useEffect(() => {
    const clickTimer = setTimeout(() => {
      setIsClicked(false);
    }, 1000);
    return () => clearTimeout(clickTimer);
  }, [isClicked]);

  return (
    <div className={classNames("Tooltip", className)}>
      <button
        className="Tooltip_Target"
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
        classNames="Tooltip_Transition"
        in={showTooltip}
        nodeRef={nodeRef}
        timeout={200}
        unmountOnExit
      >
        <div
          className={classNames(
            "Tooltip_CenterContainer",
            `Tooltip_CenterContainer__${placement}`
          )}
          ref={nodeRef}
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
