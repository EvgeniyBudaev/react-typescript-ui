import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import isNull from "lodash/isNull";
import * as productsApi from "api/product";
import { IProduct } from "types/product";
import { Select } from "ui-kit";
import { ISelectOption } from "ui-kit/Select";
import { ProductsList } from "components";
import { SelectStyles } from "./styles";
import "./SelectPage.scss";

interface ISorting {
  value: string;
  label: string;
}

export const SelectPage: React.FC = () => {
  const PRICE_UP = "ascending price";
  const PRICE_DOWN = "descending price";
  const options: ISelectOption[] = [
    { value: "price", label: PRICE_UP },
    { value: "-price", label: PRICE_DOWN },
  ];
  const [selectedOption, setSelectedOption] = useState<ISelectOption>({
    value: "price",
    label: PRICE_UP,
  });
  const [products, setProducts] = useState<IProduct[]>([]);
  const [needRequestIndicator, setNeedRequestIndicator] = useState(0);
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const requestProducts = useCallback(() => {
    setNeedRequestIndicator(needRequestIndicator + 1);
  }, [setNeedRequestIndicator, needRequestIndicator]);

  const handleChange = (selectedOption: ISorting) => {
    if (isNull(selectedOption)) return;
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
    (selectedOption: ISelectOption) => {
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
  console.log("products", products);
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
      {!isEmpty(products) ? (
        <ProductsList products={products} />
      ) : (
        <div className="SelectPage-Warning">
          To display a list of products, you need to run the backend. Apply
          migrations. Fill the database with goods.
        </div>
      )}
    </div>
  );
};
