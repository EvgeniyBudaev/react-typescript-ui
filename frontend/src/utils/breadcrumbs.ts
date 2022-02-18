/*
 * state -- history state of app
 * route -- url of a new breadcrumb  */
import { IBreadcrumbsLocationState } from "ui-kit/Breadcrumbs";

export const isContainRoute = (
  state: IBreadcrumbsLocationState[],
  route: string
): boolean => state.some(({ url }) => url === route);

/*
 * state -- history state of app (массив хлебных крошек)
 * url -- url of current breadcrumb (URL страницы, содержащейся в state, на которую осуществляется переход) */
export const removeRemainingCrumbs = (
  state: IBreadcrumbsLocationState[],
  url: string
): IBreadcrumbsLocationState[] => {
  const index = state.findIndex(({ url: route }) => route === url);
  return state.slice(0, index);
};
