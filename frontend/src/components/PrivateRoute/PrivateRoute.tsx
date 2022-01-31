import React from "react";
import { Route, RouteProps } from "react-router";
import { Redirect, useLocation } from "react-router-dom";
import { useTypedSelector } from "hooks/useTypedSelector";

type PrivateRouteProps = RouteProps & {
  redirectTo: string;
};

interface IStateLocation {
  from: { pathname: string };
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo,
  ...props
}) => {
  const { accessToken: isAuthenticated } = useTypedSelector(
    state => state.account
  );
  const location = useLocation<IStateLocation>();

  if (!isAuthenticated) {
    return (
      <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
    );
  }

  return <Route {...props} />;
};
