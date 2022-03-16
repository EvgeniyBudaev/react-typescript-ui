import React, { useState } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import { Icon, Input, TextArea } from "ui-kit";
import InputPhone from "../Input/InputPhone";
import "./FormField.scss";

export type FormFieldType = "text" | "password" | "tel" | "textarea";

export interface IFormFieldProps<T> {
  className?: string;
  error?: string;
  label?: string;
  name: Path<T>;
  type: FormFieldType;
  register: UseFormRegister<T>;
  isFocused?: boolean;
  isRequired?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlurTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocusTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const FormField = <T,>({
  className,
  label,
  name,
  type,
  register,
  error,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
  onBlurTextArea,
  onFocusTextArea,
}: IFormFieldProps<T>): JSX.Element => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handlePasswordShow = () => {
    setIsShowPassword(prevState => !prevState);
  };

  const handleType = (type: string) => {
    if (type === "text") {
      return "text";
    }
    if (type === "password") {
      type = isShowPassword ? "text" : "password";
      return type;
    }
  };

  const renderInput = () => {
    return (
      <Input
        className={classNames({
          Input__active: isFocused,
          Input__error: error,
        })}
        {...(register ? register(name) : register)}
        autoComplete="on"
        error={error}
        name={name}
        type={handleType(type)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  };

  return (
    <div
      className={classNames("FormField", className, {
        FormField__active: isFocused,
      })}
    >
      <label className="FormField-Label" htmlFor={name}>
        {label}
        {isRequired && <span className="FormField-LabelRequired"> *</span>}
      </label>
      {type === "text" && (
        <>
          {renderInput()}
          {error && <div className="FormField-ErrorMessage">{error}</div>}
        </>
      )}

      {type === "password" && (
        <>
          {renderInput()}
          <div className="FormField-Visibility" onClick={handlePasswordShow}>
            {isShowPassword ? (
              <Icon type="VisibilityOff" />
            ) : (
              <Icon type="Visibility" />
            )}
          </div>
          {error && <div className="ErrorMessage">{error}</div>}
        </>
      )}

      {type === "tel" && (
        <>
          <InputPhone
            className={classNames({
              Input__active: isFocused,
              Input__error: error,
            })}
            {...(register ? register(name) : register)}
            name={name}
            type={type}
            error={error}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {error && <div className="ErrorMessage">{error}</div>}
        </>
      )}

      {type === "textarea" && (
        <TextArea
          className={classNames({
            Input__active: isFocused,
            Input__error: error,
          })}
          {...(register ? register(name) : register)}
          name={name}
          error={error}
          onFocus={onFocusTextArea}
          onBlur={onBlurTextArea}
        />
      )}
    </div>
  );
};
