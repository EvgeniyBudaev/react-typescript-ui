import type { FC } from "react";
import clsx from "clsx";
import isNil from "lodash/isNil";
import { Hr } from "components/Hr";
import { Title } from "components/Title";
import { ETheme, Select, useThemeContext } from "uikit";
import type { TSorting } from "uikit";
import { useSelect } from "./hooks";
import "./SelectPage.scss";

type TProps = {
  onSortingChange?: (data: TSorting["value"]) => void;
  sorting?: TSorting["value"];
};

export const SelectPage: FC<TProps> = ({ onSortingChange, sorting = "price_asc" }) => {
  const themeState = useThemeContext();
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light;
  const {
    isSelectOpened,
    multipleSelectedOption,
    onBlur,
    onChange,
    onFocus,
    options,
    selectedOption,
  } = useSelect();

  return (
    <section className="SelectPage">
      <Title>Select</Title>
      <Select
        className={clsx("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        isMulti={false}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        theme={theme}
        value={selectedOption} // value={options.find(option => option.value === sorting)!}
      />
      <div>
        <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
      </div>
      <Hr />
      <Title>Multiple Select</Title>
      <Select
        className={clsx("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        isMulti={true}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
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
