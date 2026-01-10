import { createRef, Fragment, useEffect, useState } from "react";
import { usePopper } from "react-popper";
import type { FC } from "react";
import clsx from "clsx";
import { Popover as UiPopover, Transition } from "@headlessui/react";

import { Title } from "components/Title";
import { ETypographyVariant, POPOVER_POSITION_STYLES, POPOVER_WIDTH, Typography } from "uikit";
import type { TPopoverPosition } from "uikit";
import "./PopoverPage.scss";

export const PopoverPage: FC = () => {
  const position = "center";
  const [popoverPosition, setPopoverPosition] = useState<TPopoverPosition>("center");
  const triggerRef = createRef<HTMLDivElement>();

  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
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

  const renderPopoverTrigger = () => {
    return (
      <div className="PopoverPage-Button">
        <div className="PopoverPage-ButtonText">
          <Typography variant={ETypographyVariant.TextB3Medium}>Title</Typography>
        </div>
      </div>
    );
  };

  return (
    <section className="PopoverPage">
      <Title>Popover</Title>
      <UiPopover className="HeadlessPopover">
        <UiPopover.Button ref={setReferenceElement} className="HeadlessPopover-Button">
          <div ref={triggerRef}>{renderPopoverTrigger()}</div>
        </UiPopover.Button>
        <Transition as={Fragment}>
          <UiPopover.Panel
            ref={setPopperElement}
            style={styles.popper}
            className={clsx(
              "HeadlessPopover-Panel",
              `HeadlessPopover-Panel__${POPOVER_POSITION_STYLES[popoverPosition]}`,
            )}
            {...attributes.popper}
          >
            {({ close }) => (
              <Transition.Child
                as={Fragment}
                enter="HeadlessPopover-Transition__enter"
                enterFrom="HeadlessPopover-Transition__enterFrom"
                enterTo="HeadlessPopover-Transition__enterTo"
                leave="HeadlessPopover-Transition__leave"
                leaveFrom="HeadlessPopover-Transition__leaveFrom"
                leaveTo="HeadlessPopover-Transition__leaveTo"
              >
                <div className="HeadlessPopover-PanelContent">Content</div>
              </Transition.Child>
            )}
          </UiPopover.Panel>
        </Transition>
      </UiPopover>
    </section>
  );
};
