import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import classNames from "classnames";
import { Icon } from "ui-kit";
import { removeRemainingCrumbs } from "utils/breadcrumbs";
import { IBreadcrumbsLocationState } from "../Breadcrumbs";
import "./Crumb.scss";

export interface ICrumbProps {
  className?: string;
  path: string;
  title: string;
  url: string;
}

export const Crumb: React.FC<ICrumbProps> = ({
  className,
  path,
  title,
  url,
}) => {
  const history = useHistory();
  const { state } = useLocation<IBreadcrumbsLocationState[]>();
  const match = useRouteMatch(path);

  const routeTo = event => {
    event.preventDefault();
    history.replace({
      pathname: url,
      state: removeRemainingCrumbs(state, url),
    });
  };

  const renderTitle = () => {
    if (title === "Home") {
      return <Icon className="Crumb-Icon__home" type="Home" />;
    } else {
      return title;
    }
  };

  return (
    <span className={classNames("Crumb", className)}>
      {match && match.isExact ? (
        renderTitle()
      ) : (
        <>
          <div className="Crumb-Link" onClick={routeTo}>
            {renderTitle()}
          </div>
          <Icon className="Crumb-Icon__arrow" type="ArrowRight" />
        </>
      )}
    </span>
  );
};
