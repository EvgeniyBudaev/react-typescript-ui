import clsx from "clsx";
import { forwardRef, memo, useState } from "react";
import type { ForwardedRef, FocusEvent } from "react";

import { ETypographyVariant, FadeIn, Typography } from "uikit";

import type { IInputProps } from "./types";
import "./Input.scss";

const InputComponent = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      autoComplete,
      className,
      dataTestId = "uikit__input",
      error,
      hidden,
      isDisabled = false,
      isFocused: isInputFocused,
      isReadOnly,
      isRequired,
      label,
      name,
      type,
      onBlur,
      onChange,
      onFocus,
      value,
      ...rest
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const [isFocused, setIsFocused] = useState<boolean | undefined>(isInputFocused || !!value);

    const onBlurCallback = (event: FocusEvent<HTMLInputElement>) => {
      if (event.target.value !== "") {
        setIsFocused(true);
      } else {
        setIsFocused(false);
      }
      if (onBlur) {
        onBlur(event);
      }
    };

    const onFocusCallback = (event: FocusEvent<HTMLInputElement>) => {
      if (!isFocused) {
        setIsFocused(true);
      }
      if (onFocus) {
        onFocus(event);
      }
    };

    return (
      <div
        className={clsx("InputField", className, {
          InputField__disabled: isReadOnly || isDisabled,
          InputField__active: isFocused && !isReadOnly && !isDisabled,
        })}
        data-testid={dataTestId}
      >
        <div
          className={clsx("InputField-Inner", {
            "InputField-Inner__disabled": isReadOnly || isDisabled,
            "InputField-Inner__active": isFocused,
            "InputField-Inner__error": error,
          })}
        >
          <input
            {...rest}
            className={clsx(className, "Input", {
              Input__disabled: isReadOnly || isDisabled,
              Input__active: isFocused && !isReadOnly && !isDisabled,
              Input__error: error,
            })}
            aria-disabled={isReadOnly}
            autoComplete={autoComplete}
            disabled={isDisabled}
            hidden={hidden}
            name={name}
            type={type}
            readOnly={isReadOnly}
            ref={ref}
            onChange={onChange}
            onFocus={onFocusCallback}
            onBlur={onBlurCallback}
          />
        </div>

        {error && (
          <div className="InputField-ErrorField">
            <FadeIn>
              <Typography variant={ETypographyVariant.TextB3Regular}>{error}</Typography>
            </FadeIn>
          </div>
        )}

        <div className="InputField-Label">
          <Typography
            as="label"
            htmlFor={name}
            variant={
              !isFocused ? ETypographyVariant.TextB3Regular : ETypographyVariant.TextB4Regular
            }
          >
            {label}
          </Typography>
          {isRequired && <span className="InputField-LabelRequired"> *</span>}
        </div>
      </div>
    );
  },
);

InputComponent.displayName = "InputComponent";

export const Input = memo(InputComponent);
