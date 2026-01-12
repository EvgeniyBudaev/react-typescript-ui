import { memo } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import type { TDatePickerProps } from "./types";

const DatePickerComponent: FC<TDatePickerProps> = (props) => {
  const { locale, onChange, value } = props;

  return <Calendar {...props} date={value} locale={locale} onChange={onChange} />;
};

DatePickerComponent.displayName = "DatePicker";

export const DatePicker = memo(DatePickerComponent);
