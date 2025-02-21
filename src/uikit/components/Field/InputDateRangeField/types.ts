type TClasses = {
  inputDateField?: string;
};

type TPeriodValue = [Date | null, Date | null];

export type TInputDateRangeFieldProps = {
  classes?: TClasses;
  isDisabled?: [boolean, boolean];
  isInvalid?: [boolean, boolean];
  locale?: Locale;
  maxDateFrom?: Date | null;
  minDateTo?: Date | null;
  onChange: (periodValue: TPeriodValue) => void;
  onFieldClear?: (periodValue: TPeriodValue) => void;
  placeholder?: [string, string];
  subTitle?: [string, string];
  title?: [string, string];
  value: TPeriodValue;
};
