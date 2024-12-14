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
  SelectComponentsConfig,
  SingleValue,
  StylesConfig,
} from "react-select";
import type { ETheme } from "../../enums";

export type TSelectOption = {
  value: string | number;
  label: string;
  prefixIcon?: ReactNode;
};

export type TSelectMultiType = true | false;

export type TSelectOnChange = (
  newValue: OnChangeValue<TSelectOption, TSelectMultiType>,
  actionMeta: ActionMeta<TSelectOption>,
) =>
  | ((
      newValue: OnChangeValue<TSelectOption, TSelectMultiType>,
      actionMeta: ActionMeta<TSelectOption>,
    ) => void)
  | undefined;

type TBaseSelectProps = {
  className?: string;
  components?: SelectComponentsConfig<TSelectOption, TSelectMultiType, GroupBase<TSelectOption>>;
  dataTestId?: string;
  defaultValue?: TSelectOption | TSelectOption[];
  getOptionLabel?: GetOptionLabel<TSelectOption | TSelectOption[]>;
  id?: string;
  instanceId?: string;
  isDisabled?: boolean;
  isMulti?: TSelectMultiType;
  isSearchable?: boolean;
  menuPlacement?: MenuPlacement;
  menuPosition?: MenuPosition;
  name?: string;
  onBlur?: FocusEventHandler;
  onChange?: TSelectOnChange;
  onFocus?: FocusEventHandler;
  placeholder?: string;
  styles?: StylesConfig<TSelectOption, TSelectMultiType, GroupBase<TSelectOption>> | undefined;
  theme?: ETheme;
  value?: SingleValue<TSelectOption> | MultiValue<TSelectOption>;
};

export type TAsyncSelectLoadOptionsCallback = (
  options: OptionsOrGroups<TSelectOption, GroupBase<TSelectOption>>,
) => void;

export type TAsyncSelectLoadOptions =
  | ((
      inputValue: string,
      callback: TAsyncSelectLoadOptionsCallback,
    ) => void | Promise<OptionsOrGroups<TSelectOption, GroupBase<TSelectOption>>>)
  | undefined;

export type TAsyncSelectProps = {
  loadOptions?: TAsyncSelectLoadOptions;
} & TBaseSelectProps;

export type TSelectProps = {
  options?: TSelectOption[];
} & TBaseSelectProps;

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
