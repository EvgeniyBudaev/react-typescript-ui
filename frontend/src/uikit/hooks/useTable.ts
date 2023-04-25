import { useCallback, useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash/debounce";
import isEmpty from "lodash/isEmpty";
import isNull from "lodash/isNull";
import isNil from "lodash/isNil";

import { TDeleteModalState } from "../../components/modal/ModalDelete";
import { TSearchParams } from "../../components/search";
import { DEBOUNCE_TIMEOUT, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../../constants";
import { mapTableSortingToDto } from "../../services/api/sorting";
import { TTableSortingColumnState } from "../Table/types";

type TParams = {
  onDelete?: (alias: string) => void;
  pageOption?: number;
  sizeOption?: number;
};

type TUseTable = (params: TParams) => {
  defaultSearch?: string;
  deleteModal?: { isOpen: boolean };
  isSearchActive?: boolean;
  onChangePage?: ({ selected }: { selected: number }) => void;
  onChangeSize?: (size: number) => void;
  onClickDeleteIcon?: (alias: string) => void;
  onCloseDeleteModal?: () => void;
  onDeleteSubmit?: () => void;
  onSearch?: (event: ChangeEvent<HTMLFormElement>) => void;
  onSearchBlur?: () => void;
  onSearchFocus?: () => void;
  onSearchKeyDown?: (event: KeyboardEvent) => void;
  onSortTableByProperty: (params?: TTableSortingColumnState | TTableSortingColumnState[]) => void;
};

export const useTable: TUseTable = ({ onDelete, pageOption, sizeOption }) => {
  const [deleteModal, setDeleteModal] = useState<TDeleteModalState>({ isOpen: false });
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");
  const defaultSearch: string = !isNull(search) ? search : "";
  const defaultSort: string = !isNull(sort) ? sort : "";

  const page = !isNil(pageOption) ? pageOption.toString() : DEFAULT_PAGE_SIZE.toString();
  const size = !isNil(sizeOption) ? sizeOption.toString() : DEFAULT_PAGE_SIZE.toString();

  const getSearchParams = (params: Partial<TSearchParams>) => {
    const defaultSearchParams: TSearchParams = {
      page,
      size,
      search: isEmpty(defaultSearch) ? undefined : defaultSearch,
      sort: isEmpty(defaultSort) ? undefined : defaultSort,
    };
    const mergedParams = {
      ...defaultSearchParams,
      ...params,
    };
    return Object.fromEntries(
      Object.entries(mergedParams).filter(([_key, value]) => !isEmpty(value)),
    );
  };

  const handleChangePage = useCallback(
    ({ selected }: { selected: number }) => {
      setSearchParams(
        getSearchParams({
          page: (selected + 1).toString(),
        }),
      );
    },
    [getSearchParams, setSearchParams],
  );

  const handleChangeSize = useCallback(
    (size: number) => {
      setSearchParams(
        getSearchParams({
          size: size.toString(),
        }),
      );
    },
    [getSearchParams, setSearchParams],
  );

  const handleSortTableByProperty = (
    params?: TTableSortingColumnState | TTableSortingColumnState[],
  ) => {
    const formattedParams = mapTableSortingToDto(params);
    setSearchParams(
      getSearchParams({
        sort: formattedParams.sort,
        page: DEFAULT_PAGE.toString(),
      }),
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetcher = useCallback(
    debounce((query: string) => {
      setSearchParams(
        getSearchParams({
          search: query,
          page: DEFAULT_PAGE.toString(),
        }),
      );
    }, DEBOUNCE_TIMEOUT),
    [searchParams],
  );

  const handleSearch = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    debouncedFetcher(event.target.value);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleClickDeleteIcon = useCallback(
    (alias: string) => {
      setDeleteModal({
        isOpen: true,
        alias,
      });
    },
    [setDeleteModal],
  );

  const handleDeleteSubmit = () => {
    if (deleteModal.alias) {
      onDelete?.(deleteModal.alias);
      handleCloseDeleteModal();
    }
  };

  const handleSearchBlur = () => {
    setIsSearchActive(false);
  };

  const handleSearchFocus = () => {
    setIsSearchActive(true);
  };

  const handleSearchKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsSearchActive(false);
    }
  };

  return {
    defaultSearch,
    deleteModal,
    isSearchActive,
    onChangePage: handleChangePage,
    onChangeSize: handleChangeSize,
    onClickDeleteIcon: handleClickDeleteIcon,
    onCloseDeleteModal: handleCloseDeleteModal,
    onDeleteSubmit: handleDeleteSubmit,
    onSearch: handleSearch,
    onSearchBlur: handleSearchBlur,
    onSearchFocus: handleSearchFocus,
    onSearchKeyDown: handleSearchKeyDown,
    onSortTableByProperty: handleSortTableByProperty,
  };
};
