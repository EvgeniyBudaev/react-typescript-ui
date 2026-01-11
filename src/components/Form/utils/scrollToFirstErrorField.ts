import type { DeepRequired, FieldErrors, FieldErrorsImpl, FieldValues } from "react-hook-form";
import { smoothScrollTo } from "./smoothScrollTo";

const getErrors = <T extends FieldValues>(
  errors: FieldErrors<T> | FieldErrorsImpl<DeepRequired<T>>,
  key = "",
): string[] => {
  return Object.entries(errors)
    .map(([name, value]) => {
      const newKey = key ? `${key}.${name}` : name;

      if (value?.message) {
        return newKey;
      } else {
        return getErrors(value, newKey);
      }
    })
    .flat();
};

export const scrollToFirstErrorField = <T extends FieldValues>(errors: FieldErrors<T>): void => {
  const elements = getErrors(errors)
    .map((name) => document.querySelector(`[data-name="${name}"]`) as HTMLElement)
    .filter((element) => element)
    .sort((a, b) => {
      const { top: aTop, left: aLeft } = a.getBoundingClientRect();
      const { top: bTop, left: bLeft } = b.getBoundingClientRect();
      const topElement = aTop - bTop;

      return topElement === 0 ? aLeft - bLeft : topElement;
    });

  if (elements.length) {
    const element = elements[0];

    smoothScrollTo(element, {
      duration: 600,
      offset: 20,
      // After scrolling, set focus to the field, if possible
      callback: () => (element?.querySelector("input, textarea") as HTMLElement)?.focus(),
    });
  }
};
