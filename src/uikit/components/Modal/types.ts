import type { ReactNode } from "react";

type IModalSize = "medium";

export type TModalProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  isOpen: boolean;
  onCloseModal: () => void;
  size?: IModalSize;
};

export type TModalHeaderProps = {
  align?: "start" | "center" | "end";
  children?: ReactNode;
  className?: string;
};

export type TModalContentProps = {
  children?: ReactNode;
  className?: string;
};

export type TModalFooterProps = {
  className?: string;
  children?: ReactNode;
};
