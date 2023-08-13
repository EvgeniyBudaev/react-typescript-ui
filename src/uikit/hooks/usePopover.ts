import { useEffect, useState } from "react";
import type { CSSProperties, Dispatch, RefObject, SetStateAction } from "react";
import { usePopper } from "react-popper";
import { POPOVER_WIDTH } from "../components";
import type { TPopoverPosition } from "../components";

type TUsePopoverResponse = {
  attributes: { [p: string]: { [p: string]: string } | undefined };
  popperElement?: HTMLDivElement | null;
  popoverPosition: TPopoverPosition;
  setPopperElement: Dispatch<SetStateAction<HTMLDivElement | null | undefined>>;
  setPopoverPosition: Dispatch<SetStateAction<TPopoverPosition>>;
  setReferenceElement: Dispatch<SetStateAction<HTMLButtonElement | null | undefined>>;
  referenceElement?: HTMLButtonElement | null;
  styles: { [p: string]: CSSProperties };
};

type TProps = {
  triggerRef: RefObject<HTMLDivElement>;
};

type TUsePopover = (props: TProps) => TUsePopoverResponse;

export const usePopover: TUsePopover = (props) => {
  const { triggerRef } = props;
  const position = "center";

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
  const [popoverPosition, setPopoverPosition] = useState<TPopoverPosition>(position);
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "flip",
        options: {
          altBoundary: true,
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, 12],
        },
      },
      {
        name: "preventOverflow",
        options: {
          altBoundary: true,
          padding: 12,
        },
      },
    ],
  });

  useEffect(() => {
    if (triggerRef.current && !position) {
      const { right, width } = triggerRef.current.getBoundingClientRect();
      const bodyWidth = document.body.clientWidth;
      const centerWidth = POPOVER_WIDTH / 2;
      const triggerCenter = right - width / 2;

      const rightSize = bodyWidth - triggerCenter;
      const isRight = rightSize < centerWidth;
      const isLeft = centerWidth > triggerCenter;

      if (isRight) {
        setPopoverPosition("right");
      }

      if (isLeft) {
        setPopoverPosition("left");
      }
    }
  }, []);

  return {
    attributes,
    popperElement,
    popoverPosition,
    referenceElement,
    setPopperElement,
    setPopoverPosition,
    setReferenceElement,
    styles,
  };
};
