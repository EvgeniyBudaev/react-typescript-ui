import { memo } from "react";
import type { FC } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type TProps = {
  locale?: Locale;
  onChange?: (date: Date) => void;
  value?: Date;
};

const DatePickerComponent: FC<TProps> = (props) => {
  const { locale, onChange, value } = props;

  return <Calendar date={value} locale={locale} onChange={onChange} />;
};

export const DatePicker = memo(DatePickerComponent);
