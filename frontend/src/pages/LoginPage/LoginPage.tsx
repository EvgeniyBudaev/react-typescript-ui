import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";
import { getToken } from "services/account";
import { Button, FormField } from "ui-kit";

export interface ILoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Укажите Email")
    .email("Неверный email. Проверьте, правильно ли введён email"),
  password: yup
    .string()
    .required("Write your password")
    .min(8, "ust be at 8 characters"),
});

export const LoginPage: React.FC = () => {
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(schema) });
  const watchAllFields = watch();
  const dispatch = useDispatch();

  const onSubmit = (data: ILoginForm) => {
    dispatch(getToken(data));
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

  const errorPasswordMessage = (message: string | undefined) => {
    if (message) {
      return message;
    }
  };

  return (
    <section className="FormPage">
      <div className="FormPageContent">
        <h1 className="FormPageContentTitle">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="FormPage-FormFieldGroup">
            <FormField
              label="Email"
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
          </div>
          <Button className="FormPage-Button" type="submit">
            Sign in
          </Button>
        </form>
      </div>
    </section>
  );
};
