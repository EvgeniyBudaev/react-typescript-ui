import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IconButton } from "./IconButton";

describe("TEST IconButton", () => {
  const onClick = jest.fn();

  test("render iconButton with icon", () => {
    render(<IconButton typeIcon="Telegram" />);
    expect(screen.getByTestId("test-icon-button")).toBeInTheDocument();
  });

  test("render iconButton with className", () => {
    render(<IconButton typeIcon="Telegram" className="MyIconButton" />);
    expect(screen.getByRole("button")).toHaveClass("MyIconButton");
  });

  test("render iconButton disabled", () => {
    render(<IconButton typeIcon="Telegram" isDisabled />);
    expect(screen.getByTestId("test-icon-button")).toBeInTheDocument();
    expect(screen.getByTestId("test-icon-button")).toHaveClass(
      "Button__disabled"
    );
    expect(screen.getByTestId("test-icon-button")).toBeDisabled();
  });

  /* The component receives the callback prop and renders the button.
	We check that the callback property is called when the button is clicked. */
  test("has iconButton clicked", () => {
    render(<IconButton typeIcon="Telegram" onClick={onClick} />);
    expect(screen.getByTestId("test-icon-button")).not.toBeDisabled();
    userEvent.click(screen.getByTestId("test-icon-button"));
    expect(onClick).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByTestId("test-icon-button"));
    expect(onClick).toHaveBeenCalled();
  });
});
