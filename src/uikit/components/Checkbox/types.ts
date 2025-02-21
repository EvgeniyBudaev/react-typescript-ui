import type { ChangeEvent, ReactNode } from "react";

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
