import { useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import "./FadeIn.scss";

type TProps = {
  children?: ReactNode;
  dataTestId?: string;
};

export const FadeIn: FC<TProps> = ({ children, dataTestId = "uikit__fadeIn" }) => {
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
