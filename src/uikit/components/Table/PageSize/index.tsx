import clsx from "clsx";
import isNil from "lodash/isNil";
import { memo, useState } from "react";
import type { FC } from "react";

import { ETheme, Select } from "uikit";

import type { ETablePlacement } from "../enums";
import type { TSelectOnChange, TSelectOption } from "../../Select/types";
import { getPageSizeOptions } from "./utils";
import "./PageSize.scss";

type TProps = {
  defaultPageSize: number;
  dropdownPosition?: ETablePlacement;
  options: number[];
  onChangePageSize: (pageSize: number) => void;
  theme?: ETheme;
};

const PageSizeComponent: FC<TProps> = ({
  defaultPageSize,
  dropdownPosition,
  options,
  onChangePageSize,
  theme = ETheme.Light,
}) => {
  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const selectOptions = getPageSizeOptions(options);

  const handleChangePageSize: TSelectOnChange = (selectedOption) => {
    if (isNil(selectedOption)) return undefined;
    if (Array.isArray(selectedOption)) {
      onChangePageSize(Number(selectedOption[0].value));
    } else {
      const optionsSingle = selectedOption as TSelectOption;
      onChangePageSize(Number(optionsSingle.value));
    }
  };

  const handleBlur = () => {
    setIsSelectOpened(false);
  };

  const handleFocus = () => {
    setIsSelectOpened(true);
  };

  return (
    <div>
      <Select
        className={clsx("PageSize-Select", {
          "PageSize-Select__active": isSelectOpened,
        })}
        isMulti={false}
        menuPlacement={dropdownPosition}
        name="pagination"
        options={selectOptions}
        theme={theme}
        value={selectOptions.find((option) => option.value === defaultPageSize.toString())}
        onBlur={handleBlur}
        onChange={handleChangePageSize}
        onFocus={handleFocus}
      />
    </div>
  );
};

PageSizeComponent.displayName = "PageSize";

export const PageSize = memo(PageSizeComponent);
