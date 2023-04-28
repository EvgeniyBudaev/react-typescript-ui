import type { FC, ReactNode } from "react";

type TProps = {
  children?: ReactNode;
};

export const ChildrenComponent: FC<TProps> = ({ children }) => {
  return <>{children}</>;
};
