import { useEffect, useState } from "react";
import type { FC, ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import clsx from "clsx";
import "./Tooltip.scss";

import { useMounted } from "../../hooks";
import type { TModifiers, TPlacement } from "./types";
import { getTooltipOffset, getVirtualReference } from "./utils";

export type TTooltipProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  isOpen?: boolean;
  message?: string | ReactElement;
  modifiers?: TModifiers;
  placement?: TPlacement;
};

export const Tooltip: FC<TTooltipProps> = ({
  children,
  dataTestId,
  isOpen,
  message,
  modifiers,
  className = "",
  placement = "right",
}) => {
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [virtualReference, setVirtualReference] = useState<ReturnType<
    typeof getVirtualReference
  > | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const isManualVisibility = typeof isOpen !== "undefined";
  const hasMounted = useMounted();

  let popperModifiers: TModifiers = [
    {
      name: "arrow",
      options: {
        element: arrowElement,
        padding:
          popperElement &&
          referenceElement &&
          popperElement.offsetWidth / referenceElement.offsetWidth,
      },
    },
    {
      name: "flip",
      options: {
        altBoundary: true,
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

  if (modifiers) {
    popperModifiers = popperModifiers.concat(modifiers);
  }

  const { styles, attributes } = usePopper(virtualReference, popperElement, {
    modifiers: popperModifiers,
    placement,
  });

  const onToggle = (visible: boolean | ((prevState: boolean) => boolean)) => () => {
    if (!isManualVisibility) {
      setVisible(visible);
    }
  };

  useEffect(() => {
    if (visible) {
      const listener = ({ clientX, clientY }: MouseEvent) => {
        setVirtualReference(getVirtualReference(clientX, clientY));
      };

      document.addEventListener("mousemove", listener);

      return () => document.removeEventListener("mousemove", listener);
    } else {
      setVirtualReference(null);
    }
  }, [visible]);

  return (
    <div data-testid={dataTestId}>
      <div
        className={clsx("Tooltip", className)}
        data-testid="tooltip-ref-element"
        onMouseOver={onToggle(true)}
        onMouseOut={onToggle(false)}
        ref={setReferenceElement}
      >
        {children}
      </div>

      {hasMounted &&
        visible &&
        virtualReference &&
        message &&
        ReactDOM.createPortal(
          <div
            className="Tooltip-Element"
            ref={setPopperElement}
            style={{
              ...styles.popper,
              pointerEvents: "none",
            }}
            {...attributes.popper}
          >
            {message}
            <div className="Tooltip-Arrow" ref={setArrowElement} style={styles.arrow} />
          </div>,
          document.body,
        )}
    </div>
  );
};
