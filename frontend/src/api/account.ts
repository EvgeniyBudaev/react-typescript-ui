import axios from "axios";
import { ISignupForm } from "pages/FormPage/FormPage";
import { IUserSignup } from "./types/account";

export const fetchUserSignup = async ({
  firstName,
  lastName,
  phoneNumber,
  email,
  password,
  passwordConfirm,
}: ISignupForm): Promise<IUserSignup> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    passwordConfirm,
  });
  const response = await axios.post<IUserSignup>(
    `http://127.0.0.1:8000/api/v1/auth/users/`,
    body,
    config
  );
  return response.data;
};
