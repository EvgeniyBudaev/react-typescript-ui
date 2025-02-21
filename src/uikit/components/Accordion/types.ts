import type { PropsWithChildren } from "react";

export type TAccordionProps = {
  className?: string;
  dataTestId?: string;
  isActive?: boolean;
  title?: string;
} & PropsWithChildren;
