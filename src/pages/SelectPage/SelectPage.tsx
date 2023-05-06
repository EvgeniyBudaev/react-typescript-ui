import { useEffect, useState } from "react";
import type { FC } from "react";
import type { MultiValue, SingleValue } from "react-select";
import type { OnChangeValue } from "react-select";
import clsx from "clsx";
import isNil from "lodash/isNil";
import { ETheme, ETypographyVariant, Select, Typography, useThemeContext } from "uikit";
import type { isSelectMultiType, TSelectOption, TSorting } from "uikit";
import { StyledDropdownIndicator } from "./styles";
import "./SelectPage.scss";

type TProps = {
  onSortingChange?: (data: TSorting["value"]) => void;
  sorting?: TSorting["value"];
};

export const SelectPage: FC<TProps> = ({ sorting = "price_asc" }) => {
  const PRICE_UP = "ascending price";
  const PRICE_DOWN = "descending price";
  const options: TSelectOption[] = [
    { value: "price_asc", label: PRICE_UP },
    { value: "price_desc", label: PRICE_DOWN },
  ];

  const themeState = useThemeContext();
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light;

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

  const handleChange = (selectedOption?: OnChangeValue<TSelectOption, isSelectMultiType>) => {
    if (isNil(selectedOption)) return;
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

  return (
    <section className="SelectPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Select</Typography>
      <Select
        className={clsx("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        components={{ DropdownIndicator: StyledDropdownIndicator }}
        isMulti={false}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        options={options}
        theme={theme}
        value={selectedOption} // value={options.find(option => option.value === sorting)!}
      />
      <div>
        <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
      </div>
      <hr />
      <Typography variant={ETypographyVariant.TextH1Medium}>Multiple Select</Typography>
      <Select
        className={clsx("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        components={{ DropdownIndicator: StyledDropdownIndicator }}
        isMulti={true}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        options={options}
        theme={theme}
        value={multipleSelectedOption}
      />
      <div>
        <pre>{JSON.stringify(multipleSelectedOption, null, 2)}</pre>
      </div>
    </section>
  );
};
