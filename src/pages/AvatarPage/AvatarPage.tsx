import type { FC } from "react";
import { Hr, Title } from "components";
import { Avatar } from "uikit";
import avatar from "./avatar.jpg";

export const AvatarPage: FC = () => {
  return (
    <section>
      <Title>Avatar with initials</Title>
      <Avatar title="IT" />
      <Hr />
      <Title>Avatar with image</Title>
      <Avatar image={avatar} />
    </section>
  );
};
