import clsx from "clsx";
import { memo } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Icon } from "uikit";

import type { TCrumbProps } from "./types";
import "./Crumb.scss";

const CrumbComponent: FC<TCrumbProps> = ({
  breadcrumb,
  className,
  isFirstCrumb,
  isLastCrumb,
  isShowArrow,
  match,
}) => {
  const renderTitle = (crumb: ReactNode) => {
    if (isFirstCrumb) {
      return (
        <Link to={match.pathname || ""}>
          <Icon className="Crumb-Icon__home" type="Home" />
        </Link>
      );
    } else if (isLastCrumb) {
      return <span>{crumb}</span>;
    } else {
      return <Link to={match.pathname || ""}>{crumb}</Link>;
    }
  };

  return (
    <span className={clsx("Crumb", className)}>
      {renderTitle(breadcrumb)}
      {isShowArrow && <Icon className="Crumb-Icon__arrow" type="ArrowRight" />}
    </span>
  );
};

CrumbComponent.displayName = "Crumb";

export const Crumb = memo(CrumbComponent);
