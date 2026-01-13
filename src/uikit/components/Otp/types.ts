import type { HTMLInputTypeAttribute } from "react";

export type TOtpProps = {
  autoComplete?: string | undefined;
  className?: string;
  countInputs?: number;
  dataTestId?: string;
  hasError?: boolean;
  inputMode?:
    | "email"
    | "search"
    | "tel"
    | "text"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  inputType?: HTMLInputTypeAttribute | undefined;
  name: string;
  onChange?: (value: string) => void;
  value?: string;
};
