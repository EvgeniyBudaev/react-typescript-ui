import isNull from "lodash/isNull";
import { memo, useState } from "react";
import type { FC } from "react";
import CalendarUI from "react-calendar";
import type { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import type { TCalendarValue } from "./types";
import "./Calendar.scss";

type TProps = {
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  onChange: (date: Date) => void;
  value: TCalendarValue;
};

const CalendarComponent: FC<TProps> = (props) => {
  const { locale, maxDate, minDate, onChange, value } = props;
  const [activeDate, setActiveDate] = useState<Date | undefined>(new Date());

  const handleClickDay = (value: Date) => {
    onChange(value);
    setActiveDate(value);
  };

  const onActiveStartDateChange: CalendarProps["onActiveStartDateChange"] = (prop) => {
    if (prop.action === "prev2") {
      return;
    }
    isNull(prop.activeStartDate) ? setActiveDate(undefined) : setActiveDate(prop.activeStartDate);
  };

  return (
    <CalendarUI
      activeStartDate={activeDate} // The beginning of a period that shall be displayed
      className="Calendar"
      locale={locale}
      maxDate={maxDate}
      minDate={minDate}
      onActiveStartDateChange={onActiveStartDateChange}
      onClickDay={handleClickDay}
      tileClassName="DatePicker-DayTile"
      value={value}
    />
  );
};

export const Calendar = memo(CalendarComponent);
