import { createColumnHelper } from "@tanstack/table-core";
import { forwardRef, memo, useMemo, useState } from "react";
import isNil from "lodash/isNil";

import type { TPost, TPosts } from "services/api/posts/types";
import { ETheme, Table, useThemeContext } from "uikit";
import type { TTableSortingProps } from "uikit";

import { useGetColumns } from "./hooks";

type TProps = {
  fieldsSortState?: TTableSortingProps;
  onChangePage?: ({ selected }: { selected: number }) => void;
  onChangePageSize?: (pageSize: number) => void;
  onClickDeleteIcon?: (id: number) => void;
  posts: TPosts;
};

const TableComponent = forwardRef<HTMLDivElement, TProps>(
  ({ fieldsSortState, onChangePage, onChangePageSize, onClickDeleteIcon, posts }, ref) => {
    const columnHelper = createColumnHelper<TPost>();
    const columns = useGetColumns({ columnHelper, onDelete: onClickDeleteIcon });
    const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
    const themeState = useThemeContext();
    const theme = !isNil(themeState) ? themeState.theme : ETheme.Light;

    const currentPage = 1;
    const pageSize = 5;
    const pagesCount = Math.ceil(posts.length / pageSize);

    const settingsProps = useMemo(
      () => ({
        options: {
          hiddenColumns,
          setHiddenColumns,
          optionsCancelText: "Cancel",
          optionsChangeText: "Apply",
          optionsFieldHeader: "Table fields",
          optionsModalHeader: "Table properties",
          optionsSorting: {
            ascText: "Ascending",
            defaultText: "Default",
            descText: "Descending",
            hideColumnText: "Hide column",
          },
        },
      }),
      [hiddenColumns],
    );

    return (
      <div ref={ref}>
        <Table<TPost>
          columns={columns}
          currentPage={currentPage}
          data={posts}
          defaultPageSize={pageSize}
          getId={(row) => row.id}
          onChangePageSize={onChangePageSize}
          onPageChange={onChangePage}
          pagesCount={pagesCount}
          settings={settingsProps}
          sorting={fieldsSortState}
          theme={theme}
          totalItems={posts.length}
          totalItemsTitle="Total posts"
        />
        {/*<ModalDelete isOpen={isOpenDeleteModal} onClose={onCloseModal} onSubmit={onSubmitDelete} />*/}
      </div>
    );
  },
);

TableComponent.displayName = "PostsTableComponent";

export const PostsTable = memo(TableComponent);
