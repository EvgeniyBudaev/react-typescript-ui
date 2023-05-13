import { memo } from "react";
import type { FC, FocusEventHandler } from "react";
import { default as ReactSelect } from "react-select";
import { default as ReactAsyncSelect } from "react-select/async";
import type {
  ActionMeta,
  GroupBase,
  StylesConfig,
  OnChangeValue,
  MultiValue,
  SingleValue,
  GetOptionLabel,
  MenuPosition,
  MenuPlacement,
} from "react-select";
import type { SelectComponents } from "react-select/dist/declarations/src/components";
import clsx from "clsx";

import { ETheme } from "../enums";
import { useMounted } from "../hooks";
import { generateUUID } from "../utils";
import { selectStyles } from "./selectStyles";
import type { isSelectMultiType, TAsyncSelectLoadOptions, TSelectOption } from "./types";
import "./Select.scss";

export type TSelectProps = {
  className?: string;
  components?: Partial<SelectComponents<any, any, GroupBase<any>>>;
  defaultValue?: TSelectOption | TSelectOption[];
  getOptionLabel?: GetOptionLabel<TSelectOption | TSelectOption[]>;
  id?: string;
  instanceId?: string;
  isAutocomplete?: boolean;
  isMulti?: isSelectMultiType;
  isSearchable?: boolean;
  loadOptions?: TAsyncSelectLoadOptions;
  menuPlacement?: MenuPlacement;
  menuPosition?: MenuPosition;
  name?: string;
  onBlur?: FocusEventHandler;
  onChange?: (
    value: OnChangeValue<TSelectOption, isSelectMultiType>,
    action: ActionMeta<TSelectOption>,
  ) => void;
  onFocus?: FocusEventHandler;
  options?: TSelectOption[];
  styles?: StylesConfig<TSelectOption, isSelectMultiType, GroupBase<TSelectOption>> | undefined;
  theme?: ETheme;
  value?: SingleValue<TSelectOption> | MultiValue<TSelectOption>;
};

const SelectComponent: FC<TSelectProps> = ({
  className,
  components,
  defaultValue,
  getOptionLabel,
  id,
  instanceId,
  isAutocomplete = false,
  isMulti = false,
  isSearchable,
  loadOptions,
  menuPlacement,
  menuPosition,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  styles,
  theme = ETheme.Light,
  value,
}) => {
  const uuid = generateUUID();
  const { hasMounted } = useMounted();

  return hasMounted ? (
    <>
      {!isAutocomplete && (
        <ReactSelect
          className={clsx("Select", className)}
          components={components}
          defaultValue={defaultValue}
          getOptionLabel={getOptionLabel}
          id={id ? id : uuid}
          instanceId={instanceId ? instanceId : uuid}
          isMulti={isMulti}
          isSearchable={isSearchable}
          menuPlacement={menuPlacement}
          menuPosition={menuPosition}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          options={options}
          styles={!styles && theme ? selectStyles(theme) : styles}
          value={value}
        />
      )}
      {isAutocomplete && (
        <ReactAsyncSelect
          className={clsx("Select", className)}
          components={components}
          defaultValue={defaultValue}
          getOptionLabel={getOptionLabel}
          id={id ? id : uuid}
          instanceId={instanceId ? instanceId : uuid}
          isMulti={isMulti}
          isSearchable={isSearchable}
          loadOptions={loadOptions}
          menuPlacement={menuPlacement}
          menuPosition={menuPosition}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          options={options}
          styles={!styles && theme ? selectStyles(theme) : styles}
          value={value}
        />
      )}
    </>
  ) : null;
};

export const Select = memo(SelectComponent);
