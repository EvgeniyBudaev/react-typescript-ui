import { useEffect } from "react";
import type { Path, FieldValues } from "react-hook-form";
import type { TUseInitFormReturn } from "./useInitForm";

export const useSetFieldErrors = <T extends FieldValues>(form: TUseInitFormReturn<T>): void => {
  const { methods } = form;

  const fieldErrors: any = undefined;

  useEffect(() => {
    if (fieldErrors) {
      for (const error in fieldErrors) {
        methods.setError(error as Path<T>, {
          message: fieldErrors[error].map((message) => message).join(", "),
        });
      }
    }
  }, [fieldErrors, methods]);
};
