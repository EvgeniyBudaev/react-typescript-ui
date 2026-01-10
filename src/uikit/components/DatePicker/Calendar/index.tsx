import isNull from "lodash/isNull";
import { memo, useState, type FC } from "react";
import CalendarUI from "react-calendar";
import type { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

import type { TCalendarProps } from "./types";
import "./Calendar.scss";

const CalendarComponent: FC<TCalendarProps> = (props) => {
  const { locale, maxDate, minDate, onChange, value } = props;
  const [activeDate, setActiveDate] = useState<Date | undefined>(new Date());

  const handleClickDay = (value: Date) => {
    onChange?.(value);
    setActiveDate(value);
  };

  const onActiveStartDateChange: CalendarProps["onActiveStartDateChange"] = (props) => {
    if (props.action === "prev2") {
      return;
    }
    isNull(props.activeStartDate) ? setActiveDate(undefined) : setActiveDate(props.activeStartDate);
  };

  return (
    <CalendarUI
      {...props}
      activeStartDate={activeDate} // The beginning of a period that shall be displayed
      className="Calendar"
      locale={locale}
      maxDate={maxDate}
      minDate={minDate}
      onActiveStartDateChange={onActiveStartDateChange}
      onClickDay={handleClickDay}
      tileClassName="Calendar-DayTile" // Class name(s) that will be applied to a given calendar item (day on month view, month on year view and so on).
      value={value}
    />
  );
};

CalendarComponent.displayName = "Calendar";

export const Calendar = memo(CalendarComponent);
