import { useMemo } from "react";
import type { ColumnDef, ColumnHelper } from "@tanstack/react-table";
import { TableHeader } from "components/table/TableHeader";
import type { TPost } from "services/api/posts/types";
import { ETableColumns } from "../enums";

type TParams = {
  columnHelper: ColumnHelper<TPost>;
  onDelete?: (id: number) => void;
};

type TUseGetColumns = (params: TParams) => ColumnDef<TPost>[];

export const useGetColumns: TUseGetColumns = ({ columnHelper, onDelete }) => {
  return useMemo(
    () =>
      [
        columnHelper.accessor(ETableColumns.UserID, {
          id: ETableColumns.UserID,
          header: () => <TableHeader>UserID</TableHeader>,
          size: 192,
        }),

        columnHelper.accessor(ETableColumns.Title, {
          id: ETableColumns.Title,
          header: () => <TableHeader>Title</TableHeader>,
          size: 192,
        }),

        columnHelper.accessor(ETableColumns.Body, {
          id: ETableColumns.Body,
          header: () => <TableHeader>Body</TableHeader>,
          size: 192,
        }),
      ].filter(Boolean) as ColumnDef<TPost>[],
    [columnHelper, onDelete],
  );
};
