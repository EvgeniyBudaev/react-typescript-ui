import React from "react";
import { Avatar } from "ui-kit";
import avatar from "../../src/pages/AvatarPage/avatar.jpg";

export default { title: "Avatar" };

export const stories = () => (
  <div>
    <div className="story">
      <label>Avatar with initials</label>
      <Avatar title="IT" />
    </div>

    <div className="story">
      <label>Avatar with image</label>
      <Avatar image={avatar} />
    </div>
  </div>
);
