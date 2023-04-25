import { useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import "./FadeIn.scss";

type TProps = {
  children?: ReactNode;
};

export const FadeIn: FC<TProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsMounted(true);
    }, 10);
    return () => clearTimeout(id);
  }, []);

  return <span date-fade={String(isMounted)}>{children}</span>;
};
