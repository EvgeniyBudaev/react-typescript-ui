import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { useTypedSelector } from "hooks/useTypedSelector";

type PrivateRouteProps = RouteProps & {
  redirectTo: string;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  redirectTo,
  ...props
}) => {
  const { accessToken: isAuthenticated } = useTypedSelector(
    state => state.account
  );

  if (!isAuthenticated) {
    return <Redirect to={redirectTo} />;
  }

  return <Route {...props} />;
};
