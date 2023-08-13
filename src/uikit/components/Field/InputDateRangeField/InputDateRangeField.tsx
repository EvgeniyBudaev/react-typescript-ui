import { memo } from "react";
import type { FC } from "react";
import { InputDateField } from "../InputDateField";
import "./InputDateRangeField.scss";

type TClasses = {
  inputDateField?: string;
};

type TPeriodValue = [Date | null, Date | null];

type TProps = {
  classes?: TClasses;
  isDisabled?: [boolean, boolean];
  isInvalid?: [boolean, boolean];
  locale?: Locale;
  maxDateFrom?: Date | null;
  minDateTo?: Date | null;
  onChange: (periodValue: TPeriodValue) => void;
  onFieldClear?: (periodValue: TPeriodValue) => void;
  placeholder?: string;
  subTitle?: [string, string];
  title?: string;
  value: TPeriodValue;
};

const InputDateRangeFieldComponent: FC<TProps> = (props) => {
  const {
    classes,
    isDisabled: [isDisabledFrom, isDisabledTo] = [],
    isInvalid: [isInvalidFrom, isInvalidTo] = [],
    locale,
    maxDateFrom,
    minDateTo,
    onChange,
    onFieldClear,
    placeholder,
    subTitle: [subTitleFrom, subTitleTo] = [],
    title,
    value: [valueFrom, valueTo],
  } = props;

  const handleChange = (value: Date | null, inputTo?: boolean) => {
    if (inputTo) {
      onChange([valueFrom, value]);
    } else {
      onChange([value, valueTo]);
    }
  };

  const handleFieldClear = (inputTo?: boolean) => {
    if (inputTo) {
      onFieldClear?.([valueFrom, null]);
    } else {
      onFieldClear?.([null, valueTo]);
    }
  };

  return (
    <div className="InputDateRangeField">
      <InputDateField
        classes={classes}
        isInvalid={isInvalidFrom}
        isDisabled={isDisabledFrom}
        locale={locale}
        maxDate={maxDateFrom}
        onChange={(value: Date | null) => handleChange(value)}
        onFieldClear={() => handleFieldClear()}
        placeholder={placeholder}
        subTitle={subTitleFrom}
        title={title}
        value={valueFrom}
      />
      <InputDateField
        classes={classes}
        isInvalid={isInvalidTo}
        isDisabled={isDisabledTo}
        locale={locale}
        minDate={minDateTo}
        onChange={(value: Date | null) => handleChange(value, true)}
        onFieldClear={() => handleFieldClear(true)}
        placeholder={placeholder}
        subTitle={subTitleTo}
        title={title}
        value={valueTo}
      />
    </div>
  );
};

export const InputDateRangeField = memo(InputDateRangeFieldComponent);
