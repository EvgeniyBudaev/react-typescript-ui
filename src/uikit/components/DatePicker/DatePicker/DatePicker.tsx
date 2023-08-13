import isNil from "lodash/isNil";
import { memo } from "react";
import type { FC } from "react";
import { Calendar } from "react-date-range";
import type { CalendarProps } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type TProps = {
  locale?: Locale;
  onChange?: (date: Date) => void;
  value?: Date | null;
} & CalendarProps;

const DatePickerComponent: FC<TProps> = (props) => {
  const { locale, onChange, value } = props;
  const date = !isNil(value) ? value : undefined;

  return <Calendar {...props} date={date} locale={locale} onChange={onChange} />;
};

export const DatePicker = memo(DatePickerComponent);
