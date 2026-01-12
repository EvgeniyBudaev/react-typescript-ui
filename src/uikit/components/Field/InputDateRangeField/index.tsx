import { memo } from "react";

import { InputDateField } from "../InputDateField";
import type { TInputDateRangeFieldProps } from "./types";
import "./InputDateRangeField.scss";

const InputDateRangeFieldComponent: FC<TInputDateRangeFieldProps> = (props) => {
  const {
    classes,
    isDisabled: [isDisabledFrom, isDisabledTo] = [],
    isInvalid: [isInvalidFrom, isInvalidTo] = [],
    locale,
    maxDateFrom,
    minDateTo,
    onChange,
    onFieldClear,
    placeholder: [placeholderFrom, placeholderTo] = [],
    subTitle: [subTitleFrom, subTitleTo] = [],
    title: [titleFrom, titleTo] = [],
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
        placeholder={placeholderFrom}
        subTitle={subTitleFrom}
        title={titleFrom}
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
        placeholder={placeholderTo}
        subTitle={subTitleTo}
        title={titleTo}
        value={valueTo}
      />
    </div>
  );
};

InputDateRangeFieldComponent.displayName = "InputDateRangeField";

export const InputDateRangeField = memo(InputDateRangeFieldComponent);
