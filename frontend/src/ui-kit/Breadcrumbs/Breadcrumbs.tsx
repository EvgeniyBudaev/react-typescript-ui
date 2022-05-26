import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import Crumb from "./Crumb";
import "./Breadcrumbs.scss";

export interface IBreadcrumbsLocationState {
  id: string;
  path: string;
  title: string;
  url: string;
}

const BreadcrumbsComponent: React.FC = () => {
  const location = useLocation<IBreadcrumbsLocationState[]>();
  const { state } = location;

  if (state) {
    return (
      <nav className="Breadcrumbs">
        {state.map(crumb => (
          <Crumb {...crumb} key={crumb.url} />
        ))}
      </nav>
    );
  }
  return null;
};

export const Breadcrumbs = memo(BreadcrumbsComponent);
