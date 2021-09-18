import React, { useState } from "react";
import { ValueType } from "react-select";
import classNames from "classnames";
import { Select } from "ui-kit";
import { ISelectOption } from "ui-kit/Select";
import { SelectStyles } from "pages/SelectPage/styles";

type IsMulti = false;

export default { title: "Select" };

export const stories = () => {
  const PRICE_UP = "по возрастанию цены";
  const PRICE_DOWN = "по убыванию цены";
  const options: ISelectOption[] = [
    { value: "price", label: PRICE_UP },
    { value: "-price", label: PRICE_DOWN },
  ];
  const [selectedOption, setSelectedOption] = useState<ISelectOption>({
    value: "price",
    label: PRICE_UP,
  });
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const handleChange = (selectedOption: ValueType<ISelectOption, IsMulti>) => {
    setSelectedOption(selectedOption);
  };

  const handleFocus = () => {
    setIsSelectOpened(true);
  };

  const handleBlur = () => {
    setIsSelectOpened(false);
  };

  return (
    <div>
      <div className="story">
        <label>Select</label>
        <Select
          className={classNames("Select-Custom", {
            "Select-Custom__active": isSelectOpened,
          })}
          styles={SelectStyles}
          value={selectedOption}
          options={options}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
};
