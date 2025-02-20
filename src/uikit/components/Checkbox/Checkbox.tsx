import clsx from "clsx";
import { memo } from "react";
import type { ChangeEvent, FC, ReactNode } from "react";
import { Icon } from "uikit";
import "./Checkbox.scss";

export type TCheckboxProps = {
  checked?: boolean;
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  defaultChecked?: boolean;
  id: string;
  label: string;
  name: string;
  nameGroup: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, id: string, nameGroup: string) => void;
};

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
