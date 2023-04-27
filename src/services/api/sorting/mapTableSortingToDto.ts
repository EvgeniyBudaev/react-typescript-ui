import type { TTableSortingParams } from "uikit";

export const mapTableSortingToDto = (params?: TTableSortingParams, type?: string) => {
  if (Array.isArray(params)) {
    return {
      sort: params
        ?.map((item) => `${item.sortProperty}_${item.sortDirection?.toLowerCase()}`)
        .join(","),
    };
  }
  return { sort: params ? `${params.sortProperty}_${params.sortDirection?.toLowerCase()}` : "" };
};
