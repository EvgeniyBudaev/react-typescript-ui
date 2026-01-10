import { memo, useCallback } from "react";
import type { ChangeEventHandler, FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Textarea as TextareaUi } from "uikit";
import type { ITextareaProps as TTextareaPropsUi } from "uikit";

export type TTextareaProps = TTextareaPropsUi & {
  name: string;
};

const TextareaComponent: FC<TTextareaProps> = ({
  className,
  defaultValue = "",
  hidden,
  name,
  ...props
}) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    defaultValue,
  });

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      field.onChange(event.target.value);
    },
    [field],
  );

  return (
    <TextareaUi
      {...props}
      className={className}
      hidden={hidden}
      isFocused={!!defaultValue}
      name={field.name}
      onChange={handleChange}
      ref={field.ref}
      value={field.value}
    />
  );
};

export const Textarea = memo(TextareaComponent);
