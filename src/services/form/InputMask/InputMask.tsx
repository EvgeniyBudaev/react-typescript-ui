import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { ChangeEventHandler, FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import ReactInputMask from "@mona-health/react-input-mask";
import type { BeforeMaskedStateChangeStates, InputState } from "react-input-mask";
import isFunction from "lodash/isFunction";
import { ClientOnly, Input as InputUi, useMounted } from "uikit";
import type { IInputProps as IInputPropsUi } from "uikit";

export type TInputMaskProps = IInputPropsUi & {
  alwaysShowMask?: boolean;
  beforeMaskedStateChange?: (state: BeforeMaskedStateChangeStates) => InputState;
  defaultValue?: string | number | readonly string[];
  isDisabled?: boolean;
  name: string;
  normalize?: (value: string) => string;
  mask: string | (RegExp | string)[];
  maskPlaceholder?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  title?: string;
};

const InputMaskComponent: FC<TInputMaskProps> = (props) => {
  const {
    alwaysShowMask,
    beforeMaskedStateChange,
    defaultValue = "",
    isDisabled = false,
    name,
    normalize,
    mask,
    maskPlaceholder,
    onChange,
    title,
    ...rest
  } = props;

  const [showChild, setShowChild] = useState(false);
  const hasMounted = useMounted();
  const inputRef = useRef<HTMLInputElement>(null);

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
      if (isFunction(normalize)) {
        event.target.value = normalize(event.target.value);
      }

      if (isFunction(onChange)) {
        onChange(event.target.value);
      }

      field.onChange(event.target.value);
    },
    [normalize, onChange, field],
  );

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }

  return (
    hasMounted && (
      <ClientOnly>
        {() => (
          <ReactInputMask
            {...field}
            alwaysShowMask={alwaysShowMask}
            beforeMaskedStateChange={beforeMaskedStateChange}
            defaultValue={defaultValue}
            mask={mask}
            maskPlaceholder={maskPlaceholder}
            onChange={handleChange}
          >
            <InputUi
              {...rest}
              defaultValue={defaultValue}
              error={error?.message}
              isDisabled={isDisabled}
              isFocused={!!defaultValue}
              ref={field.ref}
            />
          </ReactInputMask>
        )}
      </ClientOnly>
    )
  );
};

export const InputMask = memo(InputMaskComponent);
