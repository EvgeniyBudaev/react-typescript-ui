import type { FC, ReactNode } from "react";
import { useHydrated } from "uikit";

type TProps = {
  children(): ReactNode;
  fallback?: ReactNode;
};

export const ClientOnly: FC<TProps> = ({ children, fallback = null }) => {
  return useHydrated() ? <>{children()}</> : <>{fallback}</>;
};
