import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("TEST Input", () => {
  test("render input", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("has input placeholder", () => {
    render(<Input placeholder="email" />);
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
  });

  test("has email type for email input", () => {
    render(<Input type="email" />);
    const emailInput = screen.getByTestId("test-input") as HTMLInputElement;
    expect(emailInput.type).toBe("email");
    userEvent.type(emailInput, "test@gmail.com");
  });

  test("input with className", () => {
    render(<Input className="MyInput" />);
    expect(screen.getByRole("textbox")).toHaveClass("MyInput");
  });

  test("input with error", () => {
    render(<Input error="input is invalid" />);
    expect(screen.getByTestId("test-input")).toHaveClass("Input__error");
  });

  test("updates input on change", () => {
    render(<Input onChange={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    // fireEvent.change(input, { target: { value: "text" } });
    // expect(input.value).toBe("text");
    userEvent.type(input, "text"); // alternative to fireEvent.change
  });

  test("updates input on focus", () => {
    render(<Input onFocus={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.click(input);
    expect(input).toHaveFocus();
  });

  test("updates input on blur", () => {
    render(<Input onBlur={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.click(input);
    expect(input).toHaveFocus();
    userEvent.click(document.body);
    expect(input).not.toHaveFocus();
  });
});
