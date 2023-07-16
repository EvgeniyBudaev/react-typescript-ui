import { memo } from "react";
import type { FC } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Crumb } from "./Crumb";
import "./Breadcrumbs.scss";

type TProps = {
  dataTestId?: string;
};

const BreadcrumbsComponent: FC<TProps> = ({ dataTestId = "uikit__breadcrumbs" }) => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav className="Breadcrumbs" data-testid={dataTestId}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => {
        const isFirstCrumb = index === 0;
        const isLastCrumb = index === breadcrumbs.length - 1;
        const isShowArrow = index < breadcrumbs.length - 1;

        return (
          <Crumb
            key={match.pathname}
            breadcrumb={breadcrumb}
            isFirstCrumb={isFirstCrumb}
            isLastCrumb={isLastCrumb}
            isShowArrow={isShowArrow}
            match={match}
          />
        );
      })}
    </nav>
  );
};

export const Breadcrumbs = memo(BreadcrumbsComponent);
