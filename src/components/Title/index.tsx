import { ETypographyVariant, Typography } from "uikit";

import "./Title.scss";

export const Title: FCC = ({ children }) => {
  return (
    <div className="Title">
      <Typography variant={ETypographyVariant.TextH1Medium}>{children}</Typography>
    </div>
  );
};
