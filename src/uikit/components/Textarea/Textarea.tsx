import clsx from "clsx";
import { forwardRef, memo, useState } from "react";
import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes, FocusEvent } from "react";
import { ETypographyVariant, Typography } from "uikit/index";
import "./Textarea.scss";

export interface ITextareaProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  autoComplete?: string;
  className?: string;
  hidden?: boolean;
  isFocused?: boolean;
  isRequired?: boolean;
  label?: string;
  name?: string;
  value?: string;
}

const TextareaComponent = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      autoComplete,
      className,
      hidden,
      isFocused: isTextareaFocused,
      isRequired,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      ...rest
    }: ITextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ): JSX.Element => {
    const [isFocused, setIsFocused] = useState<boolean | undefined>(isTextareaFocused);

    const onBlurCallback = (event: FocusEvent<HTMLTextAreaElement>) => {
      if (event.target.value !== "") {
        setIsFocused(true);
      } else {
        setIsFocused(false);
      }

      if (onBlur) {
        onBlur(event);
      }
    };

    const onFocusCallback = (event: FocusEvent<HTMLTextAreaElement>) => {
      if (!isFocused) {
        setIsFocused(true);
      }

      if (onFocus) {
        onFocus(event);
      }
    };

    return (
      <div
        className={clsx("TextareaField", className, {
          TextareaField__active: isFocused,
        })}
      >
        <div
          className={clsx("TextareaField-Inner", {
            "TextareaField-Inner__active": isFocused,
          })}
        >
          <textarea
            {...rest}
            className={clsx(className, "Textarea", {
              Input__active: isFocused,
            })}
            autoComplete={autoComplete}
            hidden={hidden}
            name={name}
            ref={ref}
            onChange={onChange}
            onFocus={onFocusCallback}
            onBlur={onBlurCallback}
          />
        </div>

        <label className="TextareaField-Label" htmlFor={name}>
          <Typography
            variant={
              !isFocused ? ETypographyVariant.TextB3Regular : ETypographyVariant.TextB4Regular
            }
          >
            {label}
          </Typography>
          {isRequired && <span className="TextareaField-LabelRequired"> *</span>}
        </label>
      </div>
    );
  },
);

TextareaComponent.displayName = "TextareaComponent";

export const Textarea = memo(TextareaComponent);
