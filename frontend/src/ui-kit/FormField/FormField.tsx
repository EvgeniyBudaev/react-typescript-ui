import React, { useState } from "react";
import classNames from "classnames";
import { Icon, Input, TextArea } from "ui-kit";
import InputPhone from "../Input/InputPhone";
import "./FormField.scss";

export type FormFieldType = "text" | "password" | "tel" | "textarea";

export interface IFormFieldProps {
  className?: string;
  error?: string;
  label?: string;
  name?: string;
  type: FormFieldType;
  register?: (Ref, RegisterOptions?) => { onChange; onBlur; name; ref };
  isFocused?: boolean;
  isRequired?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlurTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocusTextArea?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const FormField: React.FC<IFormFieldProps> = ({
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
}) => {
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
          <Input
            className={classNames({
              Input__active: isFocused,
              Input__error: error,
            })}
            error={error}
            name={name}
            type={handleType(type)}
            {...(register ? register(name) : register)}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {error && <div className="FormField-ErrorMessage">{error}</div>}
        </>
      )}

      {type === "password" && (
        <>
          <Input
            className={classNames({
              Input__active: isFocused,
              Input__error: error,
            })}
            name={name}
            type={handleType(type)}
            error={error}
            {...(register ? register(name) : register)}
            onFocus={onFocus}
            onBlur={onBlur}
          />
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
            name={name}
            type={type}
            error={error}
            {...(register ? register(name) : register)}
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
          name={name}
          error={error}
          {...(register ? register(name) : register)}
          onFocus={onFocusTextArea}
          onBlur={onBlurTextArea}
        />
      )}
    </div>
  );
};
