import clsx from "clsx";
import { memo, useRef, useEffect, useState } from "react";
import type { ChangeEvent, ClipboardEvent } from "react";

import type { TOtpProps } from "./types";
import "./Otp.scss";

const OtpComponent: FC<TOtpProps> = ({
  autoComplete = "off",
  className,
  countInputs = 4,
  dataTestId = "uikit__otp",
  hasError,
  inputMode = "numeric",
  inputType = "password",
  name,
  onChange,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const otpRef = useRef<HTMLDivElement>(null);
  const valueLength = value?.length ?? 0;
  const [isFieldActive, setIsFieldActive] = useState(false);

  const digits = Array(countInputs)
    .fill("")
    .map((_, i) => value?.[i] ?? "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "").slice(0, countInputs);
    onChange?.(numericValue);
    console.log(numericValue);
    setIsFieldActive(true);
  };

  const handleInputClick = () => {
    if (valueLength > 0 && valueLength < countInputs) {
      onChange?.("");
      inputRef.current?.focus();
      setIsFieldActive(true);
    }
  };

  const handleInputFocus = () => {
    setIsFieldActive(true);
  };

  const handleInputBlur = () => {
    if (valueLength < countInputs) {
      setIsFieldActive(false);
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text");
    const numericPasted = pastedData.replace(/\D/g, "").slice(0, countInputs);
    onChange?.(numericPasted);
    setIsFieldActive(true);
  };

  useEffect(() => {
    if (!value?.length) {
      inputRef.current?.focus();
    }
  }, [inputRef.current, value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        otpRef.current &&
        !otpRef.current.contains(event.target as Node) &&
        valueLength > 0 &&
        valueLength < countInputs
      ) {
        onChange?.("");
        setIsFieldActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [countInputs, onChange, inputRef.current, otpRef.current, valueLength]);

  return (
    <div className={clsx("Otp", className)} data-testid={dataTestId} ref={otpRef}>
      <div className="Otp-Inner">
        {digits.map((digit, index) => {
          const isCurrent = index === valueLength;
          const shouldShowCaret = valueLength < countInputs && index === valueLength;
          const showFocusedStyle = isFieldActive && isCurrent;

          return (
            <div
              aria-hidden="true"
              className={clsx("Otp-PinCode", {
                "Otp-PinCode__focused": showFocusedStyle,
                "Otp-PinCode__error": hasError,
              })}
              key={index}
              tabIndex={-1}
            >
              {digit && !hasError && (
                <div className={clsx("Otp-Circle", { "Otp-Circle__error": hasError })} />
              )}
              {digit && hasError && digit}
              {shouldShowCaret && !hasError && isFieldActive && <span className="Otp-Caret"></span>}
            </div>
          );
        })}

        <input
          autoComplete={autoComplete}
          className="Otp-Input"
          inputMode={inputMode}
          maxLength={countInputs}
          name={name}
          onBlur={handleInputBlur}
          onChange={handleChange}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onPaste={handlePaste}
          ref={inputRef}
          type={inputType}
          value={value}
        />
      </div>
    </div>
  );
};

export const Otp = memo(OtpComponent);
