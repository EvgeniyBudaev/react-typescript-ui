import type { FocusEventHandler, ReactNode } from "react";
import type {
  ActionMeta,
  GetOptionLabel,
  GroupBase,
  MenuPlacement,
  MenuPosition,
  MultiValue,
  OnChangeValue,
  OptionsOrGroups,
  SingleValue,
  StylesConfig,
} from "react-select";
import type { SelectComponents } from "react-select/dist/declarations/src/components";
import type { ETheme } from "../enums";

export type TSelectOption = {
  value: string;
  label: string;
  prefixIcon?: ReactNode;
};

export type TSelectMultiType = true | false;

type TBaseSelectProps = {
  className?: string;
  components?: Partial<SelectComponents<TSelectOption, TSelectMultiType, GroupBase<TSelectOption>>>;
  defaultValue?: TSelectOption | TSelectOption[];
  getOptionLabel?: GetOptionLabel<TSelectOption | TSelectOption[]>;
  id?: string;
  instanceId?: string;
  isMulti?: TSelectMultiType;
  isSearchable?: boolean;
  menuPlacement?: MenuPlacement;
  menuPosition?: MenuPosition;
  name?: string;
  onBlur?: FocusEventHandler;
  onChange?: (
    value: OnChangeValue<TSelectOption, TSelectMultiType>,
    action: ActionMeta<TSelectOption>,
  ) => void;
  onFocus?: FocusEventHandler;
  styles?: StylesConfig<TSelectOption, TSelectMultiType, GroupBase<TSelectOption>> | undefined;
  theme?: ETheme;
  value?: SingleValue<TSelectOption> | MultiValue<TSelectOption>;
};

export type TAsyncSelectProps = {
  loadOptions?: TAsyncSelectLoadOptions;
} & TBaseSelectProps;

export type TSelectProps = {
  options?: TSelectOption[];
} & TBaseSelectProps;

export type TAsyncSelectLoadOptionsCallback = (
  options: OptionsOrGroups<TSelectOption, GroupBase<TSelectOption>>,
) => void;

export type TAsyncSelectLoadOptions =
  | ((
      inputValue: string,
      callback: TAsyncSelectLoadOptionsCallback,
    ) => void | Promise<OptionsOrGroups<TSelectOption, GroupBase<TSelectOption>>>)
  | undefined;

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
