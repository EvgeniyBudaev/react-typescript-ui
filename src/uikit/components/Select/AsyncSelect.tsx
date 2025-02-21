import clsx from "clsx";
import { memo, type FC } from "react";
import { default as ReactAsyncSelect } from "react-select/async";

import { ETheme } from "../../enums";
import { useMounted } from "../../hooks";
import { generateUUID } from "../../utils";
import { StyledDropdownIndicator } from "./selectComponentsStyles";
import { selectStyles } from "./selectStyles";
import type { TAsyncSelectProps } from "./types";
import "./Select.scss";

const AsyncSelectComponent: FC<TAsyncSelectProps> = ({
  className,
  components,
  dataTestId = "uikit__async-select",
  defaultValue,
  getOptionLabel,
  id,
  instanceId,
  isMulti = false,
  isSearchable,
  loadOptions,
  menuPlacement,
  menuPosition,
  name,
  onBlur,
  onChange,
  onFocus,
  styles,
  theme = ETheme.Light,
  value,
}) => {
  const uuid = generateUUID();
  const { hasMounted } = useMounted();

  return hasMounted ? (
    <ReactAsyncSelect
      className={clsx("Select", className)}
      components={{ DropdownIndicator: StyledDropdownIndicator, ...components }}
      data-testid={dataTestId}
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
      styles={!styles && theme ? selectStyles(theme) : styles}
      value={value}
    />
  ) : null;
};

AsyncSelectComponent.displayName = "AsyncSelect";

export const AsyncSelect = memo(AsyncSelectComponent);
