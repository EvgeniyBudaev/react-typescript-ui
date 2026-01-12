import { Outlet, Navigate } from "react-router-dom";

import { ERoutes } from "enums/routes";

type TProps = {
  isAuthenticated?: boolean;
  redirectPath?: string;
};

export const PrivateRoutes: FC<TProps> = ({ isAuthenticated, redirectPath = ERoutes.Root }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};
