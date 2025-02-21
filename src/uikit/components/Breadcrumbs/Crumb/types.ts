import type { ReactNode } from "react";
import type { BreadcrumbMatch } from "use-react-router-breadcrumbs";

export type TCrumbProps = {
  breadcrumb: ReactNode;
  className?: string;
  isFirstCrumb: boolean;
  isLastCrumb: boolean;
  isShowArrow: boolean;
  match: BreadcrumbMatch<string>;
};
