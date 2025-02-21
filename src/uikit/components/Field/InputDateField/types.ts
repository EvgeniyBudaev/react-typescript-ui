import type { SyntheticEvent } from "react";

type TClasses = {
  inputDateField?: string;
};

export type TInputDateFieldProps = {
  classes?: TClasses;
  isDisabled?: boolean;
  isInvalid?: boolean;
  locale?: Locale;
  maxDate?: Date | null;
  minDate?: Date | null;
  onChange: (value: Date | null) => void;
  onFieldClear?: (event: SyntheticEvent) => void;
  placeholder?: string;
  subTitle?: string;
  title?: string;
  value: Date | null;
};
