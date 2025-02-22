import { memo } from "react";
import type { FC } from "react";

import type { ETablePlacement } from "../enums";
import type { ETheme } from "../../../enums";
import { PageSize } from "../PageSize";
import { Pagination } from "../../Pagination";
import "./NavigationPanel.scss";

type TProps = {
  currentPage?: number;
  defaultPageSize: number;
  dropdownPosition?: ETablePlacement;
  onChangePageSize: (pageSize: number) => void;
  onPageChange?: ({ selected }: { selected: number }) => void;
  pagesCount?: number;
  pageSizeOptions: number[];
  theme?: ETheme;
};

const NavigationPanelComponent: FC<TProps> = ({
  currentPage,
  defaultPageSize,
  dropdownPosition,
  onChangePageSize,
  onPageChange,
  pagesCount,
  pageSizeOptions,
  theme,
}) => {
  return (
    <div className="NavigationPanel">
      <PageSize
        defaultPageSize={defaultPageSize}
        dropdownPosition={dropdownPosition}
        options={pageSizeOptions}
        onChangePageSize={onChangePageSize}
        theme={theme}
      />
      {currentPage && pagesCount && onPageChange && (
        <Pagination
          forcePage={currentPage - 1}
          pagesCount={pagesCount}
          onChange={onPageChange}
          theme={theme}
        />
      )}
      <div />
    </div>
  );
};

NavigationPanelComponent.displayName = "NavigationPanel";

export const NavigationPanel = memo(NavigationPanelComponent);
