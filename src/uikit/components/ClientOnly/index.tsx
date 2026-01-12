import { useHydrated } from "uikit";

import type { TClientOnlyProps } from "./types";

export const ClientOnly: FC<TClientOnlyProps> = ({ children, fallback = null }) => {
  return useHydrated() ? <>{children()}</> : <>{fallback}</>;
};
