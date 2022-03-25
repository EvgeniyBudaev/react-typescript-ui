import { render, screen } from "@testing-library/react";
import avatar from "../../pages/AvatarPage/avatar.jpg";
import { Avatar } from "./Avatar";

describe("TEST Avatar", () => {
  test("render Avatar", () => {
    render(<Avatar image={avatar} size={46} onClick={() => {}} />);
    const element = screen.getByTestId("test-avatar");
    expect(element).toBeInTheDocument();
  });

  test("render Avatar image", () => {
    render(<Avatar image={avatar} />);
    const element = screen.queryByTestId("test-avatarFace_image");
    expect(element).toBeInTheDocument();
  });

  test("render Avatar title", () => {
    render(<Avatar title="EV" />);
    const element = screen.queryByTestId("test-avatarFace_title");
    expect(element).toBeInTheDocument();
  });
});
