import clsx from "clsx";
import { memo } from "react";
import { default as ReactSelect } from "react-select";

import { ETheme } from "../../enums";
import { useMounted } from "../../hooks";
import { generateUUID } from "../../utils/generateUUID";
import { StyledDropdownIndicator } from "./selectComponentsStyles";
import { selectStyles } from "./selectStyles";
import type { TSelectProps } from "./types";
import "./Select.scss";

const SelectComponent: FC<TSelectProps> = ({
  className,
  components,
  dataTestId = "uikit__select",
  defaultValue,
  getOptionLabel,
  id,
  instanceId,
  isDisabled = false,
  isMulti = false,
  isSearchable,
  menuPlacement,
  menuPosition,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  styles,
  theme = ETheme.Light,
  value,
}) => {
  const uuid = generateUUID();
  const { hasMounted } = useMounted();

  return hasMounted ? (
    <ReactSelect
      className={clsx("Select", className)}
      components={{ DropdownIndicator: StyledDropdownIndicator, ...components }}
      data-testid={dataTestId}
      defaultValue={defaultValue}
      getOptionLabel={getOptionLabel}
      id={id ? id : uuid}
      instanceId={instanceId ? instanceId : uuid}
      isDisabled={isDisabled}
      isMulti={isMulti}
      isSearchable={isSearchable}
      menuPlacement={menuPlacement}
      menuPosition={menuPosition}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      options={options}
      placeholder={placeholder}
      styles={!styles && theme ? selectStyles(theme) : styles}
      value={value}
    />
  ) : null;
};

SelectComponent.displayName = "Select";

export const Select = memo(SelectComponent);
