import { memo } from "react";
import type { ChangeEvent, FC, ReactNode } from "react";
import clsx from "clsx";
import { Icon } from "uikit";
import "./Checkbox.scss";

export type TCheckboxProps = {
  checked?: boolean;
  children?: ReactNode;
  className?: string;
  defaultChecked?: boolean;
  id: string;
  label: string;
  name: string;
  nameGroup: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, id: string, nameGroup: string) => void;
};

export const Component: FC<TCheckboxProps> = ({
  checked,
  children,
  className,
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
    <div className={clsx("Checkbox-Wrapper", className)}>
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

export const Checkbox = memo(Component);
