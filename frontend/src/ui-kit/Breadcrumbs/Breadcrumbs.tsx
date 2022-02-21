import React from "react";
import { useLocation } from "react-router-dom";
import Crumb from "./Crumb";
import "./Breadcrumbs.scss";

export interface IBreadcrumbsLocationState {
  id: string;
  path: string;
  title: string;
  url: string;
}

export const Breadcrumbs: React.FC = () => {
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
