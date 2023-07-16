import React from "react";
import type { FC } from "react";
import { AsyncSelect } from "uikit/index";
import type { TAutocompleteProps } from "./types";

export const Autocomplete: FC<TAutocompleteProps> = (props) => {
  return <AsyncSelect {...props} />;
};
