import type { TParams } from "../types";
import isNil from "lodash/isNil";
import pickBy from "lodash/pickBy";

export function omitEmptyFields<T extends TParams>(fields: T): TParams {
  return pickBy<T>(fields, (field: any) => {
    if (isNil(field) || ((typeof field === "string" || Array.isArray(field)) && !field.length)) {
      return false;
    }

    return true;
  });
}

export function createFormData(values: TParams): FormData {
  const formData = new FormData();

  Object.entries(values).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
}
