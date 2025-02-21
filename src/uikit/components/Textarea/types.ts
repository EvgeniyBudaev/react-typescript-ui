import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITextareaProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  autoComplete?: string;
  className?: string;
  dataTestId?: string;
  hidden?: boolean;
  isFocused?: boolean;
  isRequired?: boolean;
  label?: string;
  name?: string;
  value?: string;
}
