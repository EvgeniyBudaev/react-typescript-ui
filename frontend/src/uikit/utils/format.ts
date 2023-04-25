export const formatToStringWithPx = (value: string | number): string => {
  if (typeof value === "string") return value;
  return value.toString() + "px";
};
