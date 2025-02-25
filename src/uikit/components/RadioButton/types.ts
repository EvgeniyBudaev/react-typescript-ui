import type { ChangeEvent } from "react";

export type TRadioButtonProps = {
  checked?: boolean | undefined;
  label: string;
  name: string;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
  value?: string | readonly string[] | number | undefined;
};
