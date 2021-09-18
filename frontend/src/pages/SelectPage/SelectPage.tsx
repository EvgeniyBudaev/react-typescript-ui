import React, { useState, useEffect, useCallback } from "react";
import { ValueType } from "react-select";
import classNames from "classnames";
import * as productsApi from "api/product";
import { IProduct } from "types/product";
import { Select } from "ui-kit";
import { ISortingOption } from "ui-kit/Select";
import { ProductsList } from "components";
import { SelectStyles } from "./styles";
import "./SelectPage.scss";

type IsMulti = false;

export const SelectPage: React.FC = () => {
  const PRICE_UP = "по возрастанию цены";
  const PRICE_DOWN = "по убыванию цены";
  const options: ISortingOption[] = [
    { value: "price", label: PRICE_UP },
    { value: "-price", label: PRICE_DOWN },
  ];
  const [selectedOption, setSelectedOption] = useState<ISortingOption>({
    value: "price",
    label: PRICE_UP,
  });
  const [products, setProducts] = useState<IProduct[]>([]);
  const [needRequestIndicator, setNeedRequestIndicator] = useState(0);
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const requestProducts = useCallback(() => {
    setNeedRequestIndicator(needRequestIndicator + 1);
  }, [setNeedRequestIndicator, needRequestIndicator]);

  const handleChange = (selectedOption: ValueType<ISortingOption, IsMulti>) => {
    setSelectedOption(selectedOption);
    requestProducts();
  };

  const handleFocus = () => {
    setIsSelectOpened(true);
  };

  const handleBlur = () => {
    setIsSelectOpened(false);
  };

  const fetchProductsBySorting = useCallback(
    (selectedOption: ISortingOption) => {
      productsApi
        .fetchProducts(selectedOption)
        .then(response => {
          console.log("[response]", response);
          setProducts(response);
          setIsSelectOpened(false);
        })
        .catch(error => {
          console.log("[error]", error);
          setIsSelectOpened(false);
        });
    },
    []
  );

  useEffect(() => {
    fetchProductsBySorting(selectedOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needRequestIndicator]);

  return (
    <div className="SelectPage">
      <h2>Select</h2>
      <Select
        className={classNames("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        styles={SelectStyles}
        value={selectedOption}
        options={options}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <ProductsList products={products} />
    </div>
  );
};
