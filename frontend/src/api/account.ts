import axios from "axios";
import { ISignupForm } from "pages/FormPage/FormPage";

export interface IUserSignup {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
}

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
