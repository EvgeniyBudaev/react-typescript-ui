import { CSSObject } from "@emotion/serialize";

export const SelectStyles = {
  control: (styles: CSSObject): CSSObject => ({
    ...styles,
    border: "1px solid #B0976A",
    cursor: "pointer",
  }),
  option: (
    styles: CSSObject,
    { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
  ): CSSObject => ({
    ...styles,
    backgroundColor: isSelected ? "#dfd3c3" : "",
    color: isFocused || isSelected ? "black" : "",
    cursor: "pointer",
    ":active": {
      backgroundColor: "#dfd3c3",
    },
    ":hover": {
      backgroundColor: "#e4e4e4",
      transition: "all 0.15s",
    },
  }),
};
