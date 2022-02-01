import React from "react";
import { Route, RouteProps } from "react-router";
import { Redirect, useLocation } from "react-router-dom";
import { useTypedSelector } from "hooks/useTypedSelector";

type PublicRouteProps = RouteProps & {
  redirectTo: string;
};

interface TStateLocation {
  from: { pathname: string };
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  redirectTo,
  ...props
}) => {
  const { accessToken: isAuthenticated } = useTypedSelector(
    state => state.account
  );
  const { state } = useLocation<TStateLocation>();

  const pathGoBack = state?.from.pathname || redirectTo;

  if (isAuthenticated) {
    return <Redirect to={pathGoBack} />;
  }

  return <Route {...props} />;
};
