import { z } from "zod";
import {
  EMAIL_ERROR_MESSAGE,
  EMAIL_NOT_CYRILLIC_ERROR_MESSAGE,
  EMAIL_NOT_CYRILLIC_REGEXP,
  EMAIL_REGEXP,
  EMPTY_FIELD_ERROR_MESSAGE,
  NAME_ERROR_MESSAGE,
  NAME_REGEXP,
  PASSWORD_ERROR_MESSAGE,
  PHONE_ERROR_MESSAGE,
  PHONE_REGEXP,
} from "services/validation";
import { EFormFields } from "./enums";

export const formSchema = z
  .object({
    [EFormFields.Name]: z
      .string()
      .trim()
      .min(1, EMPTY_FIELD_ERROR_MESSAGE)
      .regex(NAME_REGEXP, NAME_ERROR_MESSAGE),
    [EFormFields.Email]: z
      .string()
      .trim()
      .min(1, EMPTY_FIELD_ERROR_MESSAGE)
      .regex(EMAIL_NOT_CYRILLIC_REGEXP, EMAIL_NOT_CYRILLIC_ERROR_MESSAGE)
      .regex(EMAIL_REGEXP, EMAIL_ERROR_MESSAGE),
    [EFormFields.Phone]: z.string().trim().min(1, EMPTY_FIELD_ERROR_MESSAGE),
    [EFormFields.Password]: z.string().trim().min(1, EMPTY_FIELD_ERROR_MESSAGE),
    [EFormFields.RePassword]: z.string().trim().min(1, EMPTY_FIELD_ERROR_MESSAGE),
  })
  .refine(({ password, rePassword }) => password === rePassword, {
    path: [EFormFields.RePassword],
    message: PASSWORD_ERROR_MESSAGE,
  })
  .refine(({ phone }) => PHONE_REGEXP.test(phone), {
    path: [EFormFields.Phone],
    message: PHONE_ERROR_MESSAGE,
  });
