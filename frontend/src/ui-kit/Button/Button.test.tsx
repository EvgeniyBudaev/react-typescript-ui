import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("TEST Button", () => {
  const onClick = jest.fn();

  test("render Button", () => {
    render(<Button />);
    expect(screen.getByTestId("test-button")).toBeInTheDocument();
  });

  test("render Button with contains text", () => {
    render(<Button>Button text</Button>);
    expect(screen.getByTestId("test-button")).toBeInTheDocument();
    expect(screen.getByTestId("test-button")).toHaveTextContent("Button text");
  });

  test("render Button disabled", () => {
    render(<Button isDisabled>Button text</Button>);
    expect(screen.getByTestId("test-button")).toBeInTheDocument();
    expect(screen.getByTestId("test-button")).toHaveTextContent("Button text");
    expect(screen.getByTestId("test-button")).toHaveClass("Button__disabled");
    expect(screen.getByTestId("test-button")).toBeDisabled();
  });

  test("render Button with icon", () => {
    render(<Button typeIcon="Edit">Button text</Button>);
    expect(screen.getByTestId("test-button")).toBeInTheDocument();
    expect(screen.getByTestId("test-button")).toHaveTextContent("Button text");
    expect(screen.queryByTestId("test-button-icon")).toBeInTheDocument();
  });

  test("render Button with icon and disabled", () => {
    render(
      <Button typeIcon="Edit" isDisabled>
        Button text
      </Button>
    );
    expect(screen.getByTestId("test-button")).toBeInTheDocument();
    expect(screen.getByTestId("test-button")).toHaveTextContent("Button text");
    expect(screen.getByTestId("test-button")).toHaveClass("Button__disabled");
    expect(screen.queryByTestId("test-button-icon")).toBeInTheDocument();
    expect(screen.getByTestId("test-button")).toBeDisabled();
  });

  /* The component receives the callback prop and renders the button.
  We check that the callback property is called when the button is clicked. */
  test("Button click", () => {
    render(<Button onClick={onClick}>Button text</Button>);
    expect(screen.getByTestId("test-button")).not.toBeDisabled();
    userEvent.click(screen.getByTestId("test-button"));
    expect(onClick).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByRole("button", { name: /Button text/i }));
    expect(onClick).toHaveBeenCalled();
  });
});
