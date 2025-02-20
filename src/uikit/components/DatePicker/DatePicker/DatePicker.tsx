import { memo } from "react";
import type { FC } from "react";
import { Calendar } from "react-date-range";
import type { CalendarProps } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type TProps = {
  locale?: Locale;
  maxDate?: Date;
  minDate?: Date;
  onChange?: (date: Date) => void;
  value?: Date;
} & CalendarProps;

const DatePickerComponent: FC<TProps> = (props) => {
  const { locale, onChange, value } = props;

  return <Calendar {...props} date={value} locale={locale} onChange={onChange} />;
};

DatePickerComponent.displayName = "DatePicker";

export const DatePicker = memo(DatePickerComponent);
