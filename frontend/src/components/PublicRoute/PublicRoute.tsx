import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { useTypedSelector } from "hooks/useTypedSelector";

type PublicRouteProps = RouteProps & {
  redirectTo: string;
};

export const PublicRoute: React.FC<PublicRouteProps> = ({
  redirectTo,
  ...props
}) => {
  const { accessToken: isAuthenticated } = useTypedSelector(
    state => state.account
  );

  if (isAuthenticated) {
    const state = { from: undefined };
    return <Redirect to={state?.from || redirectTo} />;
  }

  return <Route {...props} />;
};
