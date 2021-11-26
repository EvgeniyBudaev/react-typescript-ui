import { components } from "react-select";
import cn from "classnames";
import { CSSObject } from "@emotion/serialize";
import { Icon } from "ui-kit";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const StyledDropdownIndicator = props => {
  return (
    <div className="Select-DropdownIndicator">
      <components.DropdownIndicator {...props}>
        <Icon
          className={cn("Select-IconDropdownIndicator", {
            "Select-IconDropdownIndicator__open": props.menuIsOpen,
          })}
          type="ArrowDown"
          size="small"
        />
      </components.DropdownIndicator>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const StyledMultiValueRemove = props => {
  return (
    <div className="Select-MultiValueRemove">
      <components.MultiValueRemove {...props}>
        <Icon type="Close" size="small" />
      </components.MultiValueRemove>
    </div>
  );
};

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
  multiValue: (styles: CSSObject): CSSObject => {
    return {
      ...styles,
      display: "flex",
      alignItems: "center",
      backgroundColor: "#e4e4e4",
      padding: "4px 8px",
    };
  },
  multiValueLabel: (styles: CSSObject): CSSObject => ({
    ...styles,
    color: "black",
    fontSize: "16px",
    lineHeight: "20px",
    marginRight: "8px",
  }),
  multiValueRemove: (styles: CSSObject): CSSObject => ({
    ...styles,
    color: "#828c9c",
    cursor: "pointer",
    transition: "all 0.15s",
    ":hover": {
      color: "black",
    },
  }),
};
