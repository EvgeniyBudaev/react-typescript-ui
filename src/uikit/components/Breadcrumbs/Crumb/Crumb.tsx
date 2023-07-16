import { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import type { BreadcrumbMatch } from "use-react-router-breadcrumbs";
import { Icon } from "uikit/index";
import "./Crumb.scss";

type TProps = {
  breadcrumb: ReactNode;
  className?: string;
  isFirstCrumb: boolean;
  isLastCrumb: boolean;
  isShowArrow: boolean;
  match: BreadcrumbMatch<string>;
};

const Component: FC<TProps> = ({
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

export const Crumb = memo(Component);
