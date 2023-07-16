import type { Column } from "@tanstack/react-table";

export type TTableOptionsSorting = {
  ascText?: string;
  defaultText?: string;
  descText?: string;
  hideColumnText?: string;
};

export type TTableOptionsProps<T extends object> = {
  columns: Column<T, unknown>[];
  hiddenColumns?: string[];
  optionsCancelText?: string;
  optionsChangeText?: string;
  optionsFieldHeader?: string;
  optionsModalHeader?: string;
  optionsSorting?: TTableOptionsSorting;
  setHiddenColumns: (hiddenColumns: string[]) => void;
};
