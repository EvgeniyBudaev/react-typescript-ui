import type { ETheme } from "../../enums";

export type TPaginationProps = {
  className?: string;
  dataTestId?: string;
  forcePage?: number;
  initialPage?: number;
  marginPagesDisplayed?: number;
  onChange: ({ selected }: { selected: number }) => void;
  pagesCount: number;
  pageRangeDisplayed?: number;
  theme?: ETheme;
};
