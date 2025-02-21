import type { CalendarProps } from "react-date-range";

export type TDatePickerProps = {
  locale?: Locale;
  maxDate?: Date;
  minDate?: Date;
  onChange?: (date: Date) => void;
  value?: Date;
} & CalendarProps;
