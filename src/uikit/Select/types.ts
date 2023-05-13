import type { GroupBase, OptionsOrGroups } from "react-select";

export type TAsyncSelectLoadOptionsCallback = (
  options: OptionsOrGroups<TSelectOption, GroupBase<any>>,
) => void;

export type TAsyncSelectLoadOptions =
  | ((
      inputValue: string,
      callback: TAsyncSelectLoadOptionsCallback,
    ) => void | Promise<OptionsOrGroups<TSelectOption, GroupBase<any>>>)
  | undefined;

export type TSelectOption = {
  value: string;
  label: string;
  prefixIcon?: JSX.Element;
};

export type TSelectVariantStyle = {
  control: {
    background?: string;
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    cursor?: string;
    transition?: string;
    ":active"?: {
      border?: string;
      transition?: string;
    };
    ":hover"?: {
      border?: string;
      transition?: string;
    };
  };
  singleValue: {
    color?: string;
  };
  option: {
    backgroundColor?: string;
    borderRadius?: string;
    color?: string;
    cursor?: string;
    zIndex?: string;
    transition?: string;
    ":active"?: {
      backgroundColor?: string;
      color?: string;
      transition?: string;
    };
    ":hover"?: {
      backgroundColor?: string;
      color?: string;
      transition?: string;
    };
  };
  menu: {
    backgroundColor?: string;
    zIndex?: string | number;
  };
  menuList: {
    zIndex?: string | number;
  };
  menuPortal: {
    zIndex?: string | number;
  };
};

export type isSelectMultiType = true | false;
