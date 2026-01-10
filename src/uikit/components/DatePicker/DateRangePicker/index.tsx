import { memo, type FC } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import type { TDateRangePickerProps } from "./types";

const DateRangePickerComponent: FC<TDateRangePickerProps> = (props) => {
  const {
    editableDateInputs = false,
    locale,
    onChange,
    ranges,
    scroll = false,
    showDateDisplay = false,
    showMonthAndYearPickers = true,
    showPreview = false,
  } = props;

  return (
    <DateRange
      {...props}
      direction="horizontal" // direction of calendar months. can be vertical or horizontal
      editableDateInputs={editableDateInputs} // whether dates can be edited in the Calendar's input fields
      locale={locale}
      onChange={onChange} // startDate/endDate callback function for range changes. fn(changes). changes contains changed ranges with new startDate/endDate properties.
      ranges={ranges} // Defines ranges. array of range object
      scroll={{ enabled: scroll }} // infinite scroll behaviour configuration. Check out Infinite Scroll section
      showDateDisplay={showDateDisplay} // show/hide selection display row. Uses dateDisplayFormat for formatter
      showMonthAndYearPickers={showMonthAndYearPickers} // show select tags for month and year on calendar top, if false it will just display the month and year
      showPreview={showPreview} // visibility of preview
    />
  );
};

DateRangePickerComponent.displayName = "DateRangePicker";

export const DateRangePicker = memo(DateRangePickerComponent);
