import { memo } from "react";

import { AsyncSelect } from "../Select/AsyncSelect";
import type { TAutocompleteProps } from "./types";

const AutocompleteComponent: FC<TAutocompleteProps> = (props) => {
  return <AsyncSelect {...props} />;
};

AutocompleteComponent.displayName = "Autocomplete";

export const Autocomplete = memo(AutocompleteComponent);
