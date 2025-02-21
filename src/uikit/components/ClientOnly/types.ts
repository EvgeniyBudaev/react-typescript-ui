import type { ReactNode } from "react";

export type TClientOnlyProps = {
  children(): ReactNode;
  fallback?: ReactNode;
};
