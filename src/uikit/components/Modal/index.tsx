import clsx from "clsx";
import { useState, useEffect } from "react";
import { default as ReactModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { Icon } from "uikit";

import type {
  TModalContentProps,
  TModalFooterProps,
  TModalHeaderProps,
  TModalProps,
} from "./types";
import "./Modal.scss";

export const Modal = ({
  children,
  className,
  dataTestId = "uikit__modal",
  isOpen,
  onCloseModal,
  size = "medium",
}: TModalProps): JSX.Element => {
  const defaultClassNames = {
    modal: clsx("ModalDefault", className, {
      ModalDefault__medium: size === "medium",
    }),
    closeButton: clsx("ModalDefaultCloseButton"),
  };
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (isOpen && scrollbarWidth) {
      const _styles = {
        modal: { marginRight: `${scrollbarWidth + 16}px` },
      };
      setStyles(_styles);
      document.body.classList.add("Modal__open");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      setStyles({});
      document.body.style.removeProperty("padding-right");
      document.body.classList.remove("Modal__open");
    };
  }, [isOpen]);

  return (
    <ReactModal
      center
      classNames={defaultClassNames}
      closeIcon={<Icon type="Close" />}
      data-testid={dataTestId}
      onClose={onCloseModal}
      open={isOpen}
      styles={styles}
    >
      <div className="Modal">{children}</div>
    </ReactModal>
  );
};

const ModalHeader: FC<TModalHeaderProps> = ({ align, children, className }) => {
  return (
    <div
      className={clsx("ModalHeader", className, {
        ModalHeader__start: align === "start",
        ModalHeader__center: align === "center",
        ModalHeader__end: align === "end",
      })}
    >
      {children}
    </div>
  );
};

Modal.Header = ModalHeader;

const ModalContent: FC<TModalContentProps> = ({ children, className }) => {
  return <div className={clsx("ModalContent", className)}>{children}</div>;
};

Modal.Content = ModalContent;

const ModalFooter: FC<TModalFooterProps> = ({ children, className }) => {
  return <div className={clsx("ModalFooter", className)}>{children}</div>;
};

Modal.Footer = ModalFooter;
