import clsx from "clsx";
import { memo } from "react";
import type { ChangeEvent, FC } from "react";

import { Icon } from "uikit";

import type { TCheckboxProps } from "./types";
import "./Checkbox.scss";

export const CheckboxComponent: FC<TCheckboxProps> = ({
  checked,
  children,
  className,
  dataTestId = "uikit__checkbox",
  defaultChecked,
  id,
  label,
  name,
  nameGroup,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event, id, nameGroup);
  };

  return (
    <div className={clsx("Checkbox-Wrapper", className)} data-testid={dataTestId}>
      <input
        checked={checked}
        className="Checkbox"
        defaultChecked={defaultChecked}
        id={id}
        name={name}
        onChange={handleChange}
        type="checkbox"
        value={id}
      />
      {label && (
        <label className="Checkbox-Label" htmlFor={id}>
          <Icon className="Checkbox-Icon" type="Checkbox" />
          <span>{label}</span>
        </label>
      )}
      {children && <span className="Checkbox-Description">{children}</span>}
    </div>
  );
};

CheckboxComponent.displayName = "Checkbox";

export const Checkbox = memo(CheckboxComponent);
