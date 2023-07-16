import clsx from "clsx";
import { useState, useEffect } from "react";
import type { ReactNode, FC } from "react";
import { default as ReactModal } from "react-responsive-modal";
import { Icon } from "uikit";
import "react-responsive-modal/styles.css";
import "./Modal.scss";

type IModalSize = "medium";

type TModalProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  isOpen: boolean;
  onCloseModal: () => void;
  size?: IModalSize;
};

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

type TModalHeaderProps = {
  align?: "start" | "center" | "end";
  children?: ReactNode;
  className?: string;
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

type TModalContentProps = {
  children?: ReactNode;
  className?: string;
};

const ModalContent: FC<TModalContentProps> = ({ children, className }) => {
  return <div className={clsx("ModalContent", className)}>{children}</div>;
};

Modal.Content = ModalContent;

type TModalFooterProps = {
  className?: string;
  children?: ReactNode;
};

const ModalFooter: FC<TModalFooterProps> = ({ children, className }) => {
  return <div className={clsx("ModalFooter", className)}>{children}</div>;
};

Modal.Footer = ModalFooter;
