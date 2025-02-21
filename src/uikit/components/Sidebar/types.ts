import type { ForwardedRef, MouseEvent, ReactNode } from "react";

export type TSidebarProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  isActive?: boolean;
  onClose?: (event: MouseEvent) => void;
  ref: ForwardedRef<HTMLDivElement>;
  transition?: number;
};
