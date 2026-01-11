import { useMemo } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues, Resolver, UseFormProps, UseFormReturn } from "react-hook-form";

export type TUseInitForm<T extends FieldValues> = {
  resolver?: Resolver<T>;
} & UseFormProps<T>;

export type TUseInitFormReturn<T extends FieldValues> = {
  methods: UseFormReturn<T, any>;
};

export const useInitForm = <T extends FieldValues>(
  props?: TUseInitForm<T>,
): TUseInitFormReturn<T> => {
  const {
    resolver,
    mode = "all",
    resetOptions,
    reValidateMode,
    defaultValues,
    values,
    context,
    delayError,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    criteriaMode,
  } = props ?? {};
  const methods = useForm<T>({
    resolver,
    mode,
    resetOptions,
    reValidateMode,
    defaultValues,
    values,
    context,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    criteriaMode,
    delayError,
  });

  return useMemo(
    () => ({
      methods,
    }),
    [methods],
  );
};
