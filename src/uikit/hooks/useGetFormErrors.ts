import { useMemo } from "react";
import type {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  GlobalError,
  Merge,
} from "react-hook-form";
import isString from "lodash/isString";

type TParams = {
  data: Partial<FieldErrorsImpl<DeepRequired<FieldValues>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  };
};

type TUseGetFormErrors = (
  params: TParams,
) =>
  | { title: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined }[]
  | undefined;

export const useGetFormErrors: TUseGetFormErrors = ({ data }) => {
  const errors = useMemo(() => {
    try {
      if (isString(data)) {
        data = JSON.parse(data);
      }

      if (data) {
        return Object.values(data).map((error) => ({ title: error?.message }));
      }
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  return errors || [];
};
