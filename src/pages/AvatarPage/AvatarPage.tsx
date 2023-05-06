import React from "react";
import { Avatar, ETypographyVariant, Typography } from "uikit";
import avatar from "./avatar.jpg";
import "./AvatarPage.scss";

export const AvatarPage: React.FC = () => {
  return (
    <section className="AvatarPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Avatar with initials</Typography>
      <Avatar title="IT" />
      <hr />
      <Typography variant={ETypographyVariant.TextH1Medium}>Avatar with image</Typography>
      <Avatar image={avatar} />
    </section>
  );
};
