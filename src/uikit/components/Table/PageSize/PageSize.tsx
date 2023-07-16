import { memo, useState } from "react";
import type { FC } from "react";
import type { OnChangeValue } from "react-select";
import clsx from "clsx";
import isNil from "lodash/isNil";

import { ETheme, Select } from "uikit/index";
import type { ETablePlacement, TSelectMultiType, TSelectOption } from "uikit/index";
import { getPageSizeOptions } from "./utils";
import "./PageSize.scss";

type TProps = {
  defaultPageSize: number;
  dropdownPosition?: ETablePlacement;
  options: number[];
  onChangePageSize: (pageSize: number) => void;
  theme?: ETheme;
};

const Component: FC<TProps> = ({
  defaultPageSize,
  dropdownPosition,
  options,
  onChangePageSize,
  theme = ETheme.Light,
}) => {
  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const selectOptions = getPageSizeOptions(options);

  const handleChangePageSize = (options?: OnChangeValue<TSelectOption, TSelectMultiType>) => {
    if (isNil(options)) return;
    if (Array.isArray(options)) {
      onChangePageSize(Number(options[0].value));
    } else {
      const optionsSingle = options as TSelectOption;
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

export const PageSize = memo(Component);
