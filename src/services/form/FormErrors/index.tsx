import type { FC } from "react";
import { Error, useGetFormErrors } from "uikit";
import type { TError } from "uikit/components/Error/types";

type TProps = {
  errors: any;
};

export const FormErrors: FC<TProps> = ({ errors }) => {
  const errorList = useGetFormErrors({ data: errors }) as TError[];
  return <Error errors={errorList} />;
};
