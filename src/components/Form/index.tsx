import debounce from "lodash/debounce";
import isFunction from "lodash/isFunction";
import { type SyntheticEvent, useCallback, useId, useMemo } from "react";
import { type FieldValues, FormProvider, type SubmitHandler } from "react-hook-form";

import { useHydrated } from "uikit";

import { useSetFieldErrors } from "./hooks/useSetFieldErrors";
import type { TFormComponentProps, TSubmitData } from "./types";
import { omitEmptyFields } from "./utils/omitEmptyFields";
import { scrollToFirstErrorField } from "./utils/scrollToFirstErrorField";

export const Form = <T extends FieldValues>({
  id,
  children,
  onChange,
  onSubmit,
  method = "get",
  noValidate,
  form,
  className,
  action,
  dataTestId = "form",
}: TFormComponentProps<T>) => {
  const isHydrated = useHydrated();
  const generateUUID = useId();

  useSetFieldErrors(form);

  const resultFormId = useMemo(
    () => (!isHydrated ? undefined : id || generateUUID),
    [id, isHydrated],
  );

  const handleChange = useCallback(
    debounce(() => {
      const preparedData: TSubmitData<T> = {
        ...(omitEmptyFields(form.methods.getValues()) as T),
      };

      onChange?.(preparedData);
    }, 400),
    [onChange],
  );

  const handleSubmit: SubmitHandler<FieldValues> = useCallback(
    (data, event) => {
      const preparedData: TSubmitData<T> = {
        ...(omitEmptyFields(data) as T),
      };

      onSubmit?.(preparedData, event as SyntheticEvent<HTMLFormElement, SubmitEvent>);
    },
    [onSubmit],
  );

  return (
    <FormProvider {...form.methods}>
      <form
        id={resultFormId}
        className={className}
        method={method}
        noValidate={noValidate ?? isHydrated}
        onChange={onChange && form.methods.handleSubmit(handleChange)}
        onSubmit={form.methods.handleSubmit(handleSubmit, scrollToFirstErrorField)}
        action={action}
        data-testid={dataTestId}
      >
        {isFunction(children) ? children(form.methods) : children}
      </form>
    </FormProvider>
  );
};
