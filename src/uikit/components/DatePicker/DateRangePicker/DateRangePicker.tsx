import { memo } from "react";
import type { FC } from "react";
import type { Range, RangeKeyDict } from "react-date-range";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type TProps = {
  dateDisplayFormat?: string;
  editableDateInputs?: boolean;
  locale?: Locale;
  maxDate?: Date;
  minDate?: Date;
  months?: number;
  moveRangeOnFirstSelection?: boolean;
  onChange?: ((rangesByKey: RangeKeyDict) => void) | undefined;
  ranges?: Range[] | undefined;
  scroll?: boolean;
  showDateDisplay?: boolean;
  showMonthAndYearPickers?: boolean;
  showPreview?: boolean;
};

const DateRangePickerComponent: FC<TProps> = (props) => {
  const {
    dateDisplayFormat,
    editableDateInputs,
    locale,
    maxDate,
    minDate,
    months = 1,
    moveRangeOnFirstSelection = false,
    onChange,
    ranges,
    scroll = false,
    showDateDisplay = false,
    showMonthAndYearPickers = true,
    showPreview = false,
  } = props;

  return (
    <DateRange
      dateDisplayFormat={dateDisplayFormat}
      direction="horizontal"
      editableDateInputs={editableDateInputs}
      locale={locale}
      maxDate={maxDate}
      minDate={minDate}
      months={months}
      moveRangeOnFirstSelection={moveRangeOnFirstSelection}
      onChange={onChange}
      ranges={ranges}
      scroll={{ enabled: scroll }}
      showDateDisplay={showDateDisplay}
      showMonthAndYearPickers={showMonthAndYearPickers}
      showPreview={showPreview}
    />
  );
};

export const DateRangePicker = memo(DateRangePickerComponent);
