import { z } from "zod";
import { EFormFields } from "./enums";

export const otpSchema = z.object({
  [EFormFields.Code]: z.string().trim().min(4, "Code must be 4 digits"),
});
