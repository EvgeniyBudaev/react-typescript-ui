import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { default as ReactModal } from "react-responsive-modal";
import clsx from "clsx";
import { Icon } from "uikit/index";
import "react-responsive-modal/styles.css";
import "./Modal.scss";

type IModalSize = "medium";

type TModalProps = {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  onCloseModal: () => void;
  size?: IModalSize;
};

export const Modal = ({
  children,
  className,
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
      onClose={onCloseModal}
      open={isOpen}
      styles={styles}
    >
      <div className="Modal">{children}</div>
    </ReactModal>
  );
};

type TModalHeaderProps = {
  align?: "start" | "center" | "end";
  children?: ReactNode;
  className?: string;
};

// eslint-disable-next-line react/display-name
Modal.Header = ({ align, children, className }: TModalHeaderProps): JSX.Element => {
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

type TModalContentProps = {
  children?: ReactNode;
  className?: string;
};

// eslint-disable-next-line react/display-name
Modal.Content = ({ children, className }: TModalContentProps): JSX.Element => {
  return <div className={clsx("ModalContent", className)}>{children}</div>;
};

type TModalFooterProps = {
  className?: string;
  children?: ReactNode;
};

// eslint-disable-next-line react/display-name
Modal.Footer = ({ children, className }: TModalFooterProps): JSX.Element => {
  return <div className={clsx("ModalFooter", className)}>{children}</div>;
};
