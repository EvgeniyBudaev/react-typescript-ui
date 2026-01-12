import type { HeaderGroup } from "@tanstack/react-table";
import { memo, useState } from "react";

import { TableHeaderItem } from "../TableHeaderItem";
import type { TTableSortingProps } from "../types";
import type { TSortingColumnStateWithReset } from "./types";
import { getInitialSortingColumnState } from "./utils";
import "./TableHeader.scss";

type TProps<TColumn extends object> = {
  headerGroups: HeaderGroup<TColumn>[];
  hiddenColumns?: string[];
  optionsSorting?: {
    ascText?: string;
    descText?: string;
    hideColumnText?: string;
  };
  setHiddenColumns?: (hiddenColumns: string[]) => void;
  sorting?: TTableSortingProps;
};

const TableHeaderComponent = <T extends object>({
  headerGroups,
  hiddenColumns,
  optionsSorting,
  setHiddenColumns,
  sorting,
}: TProps<T>) => {
  const [sortingState, setSortingState] = useState<
    TSortingColumnStateWithReset | Array<TSortingColumnStateWithReset> | null
  >(getInitialSortingColumnState(sorting));

  const handleChangeSorting = (
    value: TSortingColumnStateWithReset | Array<TSortingColumnStateWithReset> | null,
  ) => {
    if (!value) {
      setSortingState(null);
      sorting?.onChangeSorting();
      return;
    }

    if (Array.isArray(value) && sorting?.multiple) {
      setSortingState(value);
      sorting?.onChangeSorting(
        value.map((item) => ({
          sortProperty: item.sortProperty,
          sortDirection: item.sortDirection,
        })),
      );
      return;
    }

    const { sortDirection, sortProperty } = value as TSortingColumnStateWithReset;
    setSortingState(value as TSortingColumnStateWithReset);
    sorting?.onChangeSorting({
      sortProperty,
      sortDirection,
    });
  };

  return (
    <thead className="TableHeader-THead">
      {headerGroups.map((headerGroup) => (
        <tr className="TableHeader-TR" key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const hasSorting = sorting?.columns.includes(header.id);

            return (
              <th
                className="TableHeader-TH"
                key={header.id}
                style={{
                  position: "relative",
                  width: header.getSize(),
                  minWidth: header.getSize(),
                  maxWidth: header.getSize(),
                }}
              >
                <TableHeaderItem
                  hasSorting={hasSorting}
                  header={header}
                  hiddenColumns={hiddenColumns}
                  multiple={sorting?.multiple}
                  onChange={handleChangeSorting}
                  optionsSorting={optionsSorting}
                  setHiddenColumns={setHiddenColumns}
                  state={sortingState}
                />
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

TableHeaderComponent.displayName = "TableHeader";

export const TableHeader = memo(TableHeaderComponent) as typeof TableHeaderComponent;
