import type { FC, ReactNode } from "react";
import { ETypographyVariant, Typography } from "uikit";
import "./Title.scss";

type TProps = {
  children?: ReactNode;
};

export const Title: FC<TProps> = ({ children }) => {
  return (
    <div className="Title">
      <Typography variant={ETypographyVariant.TextH1Medium}>{children}</Typography>
    </div>
  );
};
