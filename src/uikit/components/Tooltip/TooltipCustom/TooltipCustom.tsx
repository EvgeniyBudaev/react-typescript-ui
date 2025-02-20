import clsx from "clsx";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import type { FC, MouseEvent, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { TRANSITION } from "uikit/constants/transition";
import "./TooltipCustom.scss";

export type TTooltipCustomPlacementType = "top" | "bottom" | "left" | "right";
export type TTooltipCustomBehaviorType = "click" | "focus" | "hover";

export enum ETooltipCustomBehavior {
  CLICK = "click",
  FOCUS = "focus",
  HOVER = "hover",
}

type TProps = {
  behavior?: TTooltipCustomBehaviorType;
  children: ReactNode;
  className?: string;
  content: JSX.Element | string;
  dataTestId?: string;
  placement: TTooltipCustomPlacementType;
};

const TooltipCustomComponent: FC<TProps> = ({
  behavior = ETooltipCustomBehavior.HOVER,
  children,
  className,
  content,
  dataTestId = "uikit__tooltip-custom",
  placement,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef<HTMLButtonElement>(null);
  const nodeRef = useRef(null);

  const showTooltip = useMemo(() => {
    if (behavior === ETooltipCustomBehavior.CLICK) {
      return isClicked;
    } else if (behavior === ETooltipCustomBehavior.FOCUS) {
      return isFocused;
    } else {
      return isHovered;
    }
  }, [behavior, isClicked, isFocused, isHovered]);

  const handleOutsideClick = (event) => {
    if (targetRef.current) {
      if (targetRef.current.contains(event.target)) {
        return;
      }
      setIsClicked(false);
    }
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (behavior === ETooltipCustomBehavior.CLICK) {
      if (!isClicked) {
        document.addEventListener("click", handleOutsideClick, false);
      } else {
        document.removeEventListener("click", handleOutsideClick, false);
      }
      setIsClicked((prevState) => !prevState);
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
    <div className={clsx("TooltipCustom", className)} data-testid={dataTestId}>
      <button
        className="TooltipCustom_Target"
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
        classNames="TooltipCustom_Transition"
        in={showTooltip}
        nodeRef={nodeRef}
        timeout={TRANSITION}
        unmountOnExit
      >
        <div
          className={clsx(
            "TooltipCustom_CenterContainer",
            `TooltipCustom_CenterContainer__${placement}`,
          )}
          ref={nodeRef}
        >
          <div className={clsx("TooltipCustom_Content", `TooltipCustom_Content__${placement}`)}>
            {content}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

TooltipCustomComponent.displayName = "TooltipCustom";

export const TooltipCustom = memo(TooltipCustomComponent);
