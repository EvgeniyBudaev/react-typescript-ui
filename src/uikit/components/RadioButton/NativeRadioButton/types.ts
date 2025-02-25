import type { ChangeEvent } from "react";

export type TNativeRadioButtonProps = {
  checked?: boolean | undefined;
  className?: string | undefined;
  defaultValue?: string | undefined;
  id?: string | undefined;
  name?: string | undefined;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
  value?: string | readonly string[] | number | undefined;
};
