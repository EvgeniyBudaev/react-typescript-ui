import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  autoComplete?: string;
  className?: string;
  dataTestId?: string;
  error?: string;
  hidden?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  label?: string;
  name?: string;
  type?: string;
  value?: string | number | readonly string[] | undefined;
}
