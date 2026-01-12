import { memo, useEffect, useState } from "react";

import type { TFadeInProps } from "./types";
import "./FadeIn.scss";

const FadeInComponent: FC<TFadeInProps> = ({ children, dataTestId = "uikit__fadeIn" }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsMounted(true);
    }, 10);
    return () => clearTimeout(id);
  }, []);

  return (
    <span data-testid={dataTestId} date-fade={String(isMounted)}>
      {children}
    </span>
  );
};

FadeInComponent.displayName = "FadeIn";

export const FadeIn = memo(FadeInComponent);
