import isNil from "lodash/isNil";
import { useEffect, useState } from "react";
import type { MultiValue, SingleValue } from "react-select";

import type { TSelectOnChange, TSelectOption } from "uikit";

export const useSelect = () => {
  const PRICE_UP = "ascending price";
  const PRICE_DOWN = "descending price";

  const options: TSelectOption[] = [
    { value: "price_asc", label: PRICE_UP },
    { value: "price_desc", label: PRICE_DOWN },
  ];

  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedOption, setSelectedOption] = useState<
    SingleValue<TSelectOption> | MultiValue<TSelectOption>
  >({
    value: "price_asc",
    label: PRICE_UP,
  });
  const [multipleSelectedOption, setMultipleSelectedOption] = useState<
    SingleValue<TSelectOption> | MultiValue<TSelectOption>
  >({ value: "price_asc", label: PRICE_UP });

  const handleChange: TSelectOnChange = (selectedOption) => {
    if (isNil(selectedOption)) return undefined;
    if (Array.isArray(selectedOption)) {
      setMultipleSelectedOption(selectedOption); // onSortingChange?.(selectedOption[0].value);
    } else {
      const selectedOptionSingle = selectedOption as TSelectOption;
      setSelectedOption(selectedOptionSingle); // onSortingChange?.(selectedOptionSingle.value);
    }
    setIsSubmitting((prevState) => !prevState);
  };

  const handleBlur = () => {
    setIsSelectOpened(false);
  };

  const handleFocus = () => {
    setIsSelectOpened(true);
  };

  useEffect(() => {
    if (!isSubmitting) return;
    setIsSubmitting((prevState) => !prevState);
  }, [isSubmitting, setIsSubmitting]);

  return {
    isSelectOpened,
    multipleSelectedOption,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    options,
    selectedOption,
  };
};
