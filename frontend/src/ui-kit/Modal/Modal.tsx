import React, { useState, useEffect } from "react";
import { default as ReactModal } from "react-responsive-modal";
import classNames from "classnames";
import { Button, Icon } from "ui-kit";
import "react-responsive-modal/styles.css";
import "./Modal.scss";

type IModalSize = "medium";

export interface IModalProps {
  className?: string;
  children?: React.ReactNode;
  size?: IModalSize;
  isOpen: boolean;
  onCloseModal: () => void;
}

export const Modal = ({
  className,
  children,
  size = "medium",
  isOpen,
  onCloseModal,
}: IModalProps): JSX.Element => {
  const defaultClassNames = {
    modal: classNames("ModalDefault", className, {
      ModalDefault__medium: size === "medium",
    }),
    closeButton: classNames("ModalDefaultCloseButton"),
  };
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
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
      classNames={defaultClassNames}
      center
      closeIcon={<Icon type="Close" />}
      styles={styles}
      open={isOpen}
      onClose={onCloseModal}
    >
      <div className="Modal">{children}</div>
    </ReactModal>
  );
};

interface IModalHeaderProps {
  className?: string;
  align?: "start" | "center" | "end";
  children?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
Modal.Header = ({
  className,
  align,
  children,
}: IModalHeaderProps): JSX.Element => {
  return (
    <div
      className={classNames("ModalHeader", className, {
        ModalHeader__start: align === "start",
        ModalHeader__center: align === "center",
        ModalHeader__end: align === "end",
      })}
    >
      {children}
    </div>
  );
};

interface IModalContentProps {
  className?: string;
  children?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
Modal.Content = ({ className, children }: IModalContentProps): JSX.Element => {
  return (
    <div className={classNames("ModalContent", className)}>{children}</div>
  );
};

interface IModalFooterProps {
  className?: string;
  buttonSubmitText?: string;
  onSubmit?: () => void;
}

// eslint-disable-next-line react/display-name
Modal.Footer = ({
  className,
  buttonSubmitText = "Выбрать",
  onSubmit,
}: IModalFooterProps): JSX.Element => {
  return (
    <div className={classNames("ModalFooter", className)}>
      <Button onClick={onSubmit}>{buttonSubmitText}</Button>
    </div>
  );
};
