import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import isEmpty from "lodash/isEmpty";
import isNull from "lodash/isNull";
import * as yup from "yup";
import { Button, FormField, Spinner } from "ui-kit";
import { normalizePhoneNumber } from "utils/normalizePhoneNumber";
import "./FormPage.scss";

export interface ISignupForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  rePassword: string;
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "The first name must not contain numbers")
    .required("Write your first name"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "The last name must not contain numbers")
    .required("Write your last name"),
  phoneNumber: yup.string().required("Укажите номер телефона"),
  email: yup
    .string()
    .required("Укажите Email")
    .email("Неверный email. Проверьте, правильно ли введён email"),
  password: yup
    .string()
    .required("Укажите пароль")
    .min(8, "Пароль должен быть не менее 8 символов"),
  rePassword: yup
    .string()
    .required("Укажите пароль")
    .min(8, "Пароль должен быть не менее 8 символов"),
});

export const FormPage: React.FC = () => {
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    password: false,
    rePassword: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({ resolver: yupResolver(schema) });
  const watchAllFields = watch();

  const onSubmit = (data: ISignupForm) => {
    console.log("[DATA]", data);
    const phone_number_normalize = normalizePhoneNumber(data.phoneNumber);
    if (data.password === data.rePassword) {
      setIsPasswordMatch(false);
      console.log("[DATA]", data);
    } else {
      setIsPasswordMatch(true);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [event.target.name]: true });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (watchAllFields[event.target.name] !== "") {
      setIsFocused({ ...isFocused, [event.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [event.target.name]: false });
    }
  };

  const errorEmailMessage = (
    errorValidation: string,
    errorResponse: string
  ) => {
    if (!isEmpty(errorValidation) && !errorResponse) {
      return errorValidation;
    }
    if (!isNull(errorResponse) && !errors.email) {
      if (errorResponse === "user account с таким email уже существует.") {
        return "Пользователь с таким email уже существует";
      } else {
        return errorResponse;
      }
    }
  };

  const errorPasswordMessage = (message: string) => {
    if (message) {
      return message;
    }
    if (isPasswordMatch) {
      return "Пароли не совпадают";
    }
  };

  //if (isLoading) return <Spinner />;

  return (
    <div className="FormPage">
      <div className="FormPageContent">
        <h1 className="FormPageContentTitle">Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="FormPage-FormFieldGroup">
            <FormField
              label="First Name"
              name="firstName"
              type="text"
              register={register}
              error={errors.firstName && errors.firstName.message}
              isFocused={isFocused.firstName}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Last Name"
              name="lastName"
              type="text"
              register={register}
              error={errors.lastName && errors.lastName.message}
              isFocused={isFocused.lastName}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Мобильный телефон"
              name="phoneNumber"
              type="tel"
              register={register}
              error={errors.phoneNumber && errors.phoneNumber.message}
              isFocused={isFocused.phoneNumber}
              isRequired
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <FormField
              label="Электронная почта"
              name="email"
              type="text"
              register={register}
              error={errors.email && errors.email.message}
              // error={errorEmailMessage(
              //   errors.email?.message,
              //   error?.response.data?.email[0]
              // )}
              isFocused={isFocused.email}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Пароль"
              name="password"
              type="password"
              register={register}
              error={errorPasswordMessage(errors.password?.message)}
              isFocused={isFocused.password}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Подтверждение пароля"
              name="rePassword"
              type="password"
              register={register}
              error={errorPasswordMessage(errors.rePassword?.message)}
              isFocused={isFocused.rePassword}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </div>
          <Button className="FormPage-Button" typeButton="submit">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};
