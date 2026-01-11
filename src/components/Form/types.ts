import type { ReactNode, SyntheticEvent } from "react";
import type { FieldValues, UseFormProps, UseFormReturn } from "react-hook-form";
import type { FormMethod } from "react-router-dom";
import type { EFormMethods } from "services/form/Form/enums";
import type { TUseInitFormReturn } from "./hooks/useInitForm";

export type TParams = Record<string, any>;

export type TFormMethods = `${EFormMethods}`;

type TChildrenFunction<T extends FieldValues> = (
  data: UseFormReturn<T, any>,
) => ReactNode | ReactNode[];

export type TSubmitData<T> = T & {
  // csrf: string;
};

export type TSubmit<T extends FieldValues> = (
  data: TSubmitData<T>,
  event: SyntheticEvent<HTMLFormElement, SubmitEvent>,
) => void;

export type TChange<T extends FieldValues> = (data: TSubmitData<T>) => void;

export type TFormComponentProps<T extends FieldValues> = {
  form: TUseInitFormReturn<T>;
  authenticity?: boolean;
  method?: FormMethod;
  id?: string;
  action?: string;
  noValidate?: boolean;
  dataTestId?: string;
  className?: string;
  children?: ReactNode | ReactNode[] | TChildrenFunction<T>;

  onSubmit?: TSubmit<T>;
  onChange?: TChange<T>;
} & UseFormProps<T>;
