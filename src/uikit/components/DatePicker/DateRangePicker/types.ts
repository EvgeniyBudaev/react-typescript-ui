import type { DateRangeProps, Range, RangeKeyDict } from "react-date-range";

export type TDateRangePickerProps = {
  editableDateInputs?: boolean;
  locale?: Locale;
  onChange?: ((rangesByKey: RangeKeyDict) => void) | undefined;
  ranges?: Range[] | undefined;
  scroll?: boolean;
  showDateDisplay?: boolean;
  showMonthAndYearPickers?: boolean;
  showPreview?: boolean;
} & DateRangeProps;
