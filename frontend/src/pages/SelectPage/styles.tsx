import { components, DropdownIndicatorProps, GroupBase, MultiValueRemoveProps } from "react-select";
import clsx from "clsx";
import { Icon } from "uikit";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const StyledDropdownIndicator = (
  props: JSX.IntrinsicAttributes & DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>,
) => {
  const menuIsOpen = props.selectProps.menuIsOpen;
  return (
    <div className="Select-DropdownIndicator">
      <components.DropdownIndicator {...props}>
        <Icon
          className={clsx("Select-IconDropdownIndicator", {
            "Select-IconDropdownIndicator__open": menuIsOpen,
          })}
          type="ArrowDown"
        />
      </components.DropdownIndicator>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const StyledMultiValueRemove = (
  props: JSX.IntrinsicAttributes & MultiValueRemoveProps<unknown, boolean, GroupBase<unknown>>,
) => {
  return (
    <div className="Select-MultiValueRemove">
      <components.MultiValueRemove {...props}>
        <Icon type="Close" />
      </components.MultiValueRemove>
    </div>
  );
};
