export const setAtToStringAndPx = (value: string | number): string => {
  if (typeof value === "string") {
    return value;
  } else {
    return value.toString() + "px";
  }
};
