import React from "react";
import { Avatar } from "uikit";
import avatar from "./avatar.jpg";
import "./AvatarPage.scss";

export const AvatarPage: React.FC = () => {
  return (
    <section className="AvatarPage">
      <h2>Avatar with initials</h2>
      <Avatar title="IT" />
      <hr />
      <h2>Avatar with image</h2>
      <Avatar image={avatar} />
    </section>
  );
};
