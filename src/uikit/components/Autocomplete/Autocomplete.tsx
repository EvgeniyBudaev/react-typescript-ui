import { type FC, memo } from "react";

import { AsyncSelect } from "uikit";

import type { TAutocompleteProps } from "./types";

const AutocompleteComponent: FC<TAutocompleteProps> = (props) => {
  return <AsyncSelect {...props} />;
};

AutocompleteComponent.displayName = "Autocomplete";

export const Autocomplete = memo(AutocompleteComponent);
