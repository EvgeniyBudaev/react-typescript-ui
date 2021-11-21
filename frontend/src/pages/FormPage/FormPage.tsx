import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";
import { fetchUserSignup } from "api/account";
import { Button, FormField } from "ui-kit";
import { normalizePhoneNumber } from "utils/normalizePhoneNumber";
import "./FormPage.scss";

export interface ISignupForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirm: string;
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
    .required("Write your password")
    .min(8, "ust be at 8 characters"),
  passwordConfirm: yup
    .string()
    .required("Write your confirm password")
    .min(8, "ust be at 8 characters"),
});

export const FormPage: React.FC = () => {
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({ resolver: yupResolver(schema) });
  const watchAllFields = watch();

  const onSubmit = (data: ISignupForm) => {
    const phone_number_normalize = normalizePhoneNumber(data.phoneNumber);
    if (data.password === data.passwordConfirm) {
      setIsPasswordMatch(true);
      const options = {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: phone_number_normalize,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      };
      void fetchUserSignup(options);
    } else {
      setIsPasswordMatch(false);
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

  const errorPasswordMessage = (message: string) => {
    if (message) {
      return message;
    }
    if (!isPasswordMatch) {
      return "Пароли не совпадают";
    }
  };

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
              isFocused={isFocused.email}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Password"
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
              label="Confirm password"
              name="passwordConfirm"
              type="password"
              register={register}
              error={errorPasswordMessage(errors.passwordConfirm?.message)}
              isFocused={isFocused.passwordConfirm}
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
