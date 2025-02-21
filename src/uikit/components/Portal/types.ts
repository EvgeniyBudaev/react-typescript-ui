import type { ReactNode } from "react";

export type TPortalProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  element?: keyof JSX.IntrinsicElements;
  elementFindById: string;
};
