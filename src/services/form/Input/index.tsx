import { memo, useCallback } from "react";
import type { ChangeEventHandler, FC } from "react";
import { useController, useFormContext } from "react-hook-form";

import { Input as InputUi } from "uikit";
import type { IInputProps as TInputPropsUi } from "uikit";

export type TInputProps = TInputPropsUi & {
  name: string;
};

const InputComponent: FC<TInputProps> = ({ className, defaultValue = "", name, ...props }) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      field.onChange(event.target.value);
    },
    [field],
  );

  return (
    <InputUi
      {...props}
      className={className}
      error={error?.message}
      isFocused={!!defaultValue}
      name={field.name}
      onChange={handleChange}
      ref={field.ref}
      value={field.value}
    />
  );
};

export const Input = memo(InputComponent);
