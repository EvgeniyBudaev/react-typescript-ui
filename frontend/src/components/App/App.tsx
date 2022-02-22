import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "routes";
import {
  AccordionPage,
  AvatarPage,
  BreadcrumbsPage,
  ButtonPage,
  CheckboxPage,
  DocumentViewerPage,
  DropDownPage,
  ErrorPage,
  FormPage,
  HamburgerPage,
  HomePage,
  IconPage,
  IconButtonPage,
  LoginPage,
  ModalPage,
  OverlayPage,
  PaginationPage,
  PortalPage,
  PrivateRoutePage,
  RatingPage,
  ScrollbarPage,
  SelectPage,
  SidebarPage,
  SkeletonPage,
  SpinnerPage,
  TablePage,
  TabsPage,
  TextAreaPage,
  UploaderPage,
} from "pages";
import { Layout, PrivateRoute, ProductCard, PublicRoute } from "components";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path={ROUTES.ACCORDION} component={AccordionPage} exact />
          <Route path={ROUTES.AVATAR} component={AvatarPage} exact />
          <Route
            path={`${ROUTES.BREADCRUMBS}/:id`}
            component={ProductCard}
            exact
          />
          <Route path={ROUTES.BREADCRUMBS} component={BreadcrumbsPage} exact />
          <Route path={ROUTES.BUTTON} component={ButtonPage} exact />
          <Route path={ROUTES.CHECKBOX} component={CheckboxPage} exact />
          <Route
            path={ROUTES.DOCUMENT_VIEWER}
            component={DocumentViewerPage}
            exact
          />
          <Route path={ROUTES.DROPDOWN} component={DropDownPage} exact />
          <Route path={ROUTES.ERROR} component={ErrorPage} exact />
          <Route path={ROUTES.FORM} component={FormPage} exact />
          <Route path={ROUTES.HAMBURGER} component={HamburgerPage} exact />
          <Route path={ROUTES.ICON_BUTTON} component={IconButtonPage} exact />
          <Route path={ROUTES.ICON} component={IconPage} exact />
          <PublicRoute
            path={ROUTES.LOGIN}
            redirectTo={ROUTES.HOME}
            component={LoginPage}
          />
          <Route path={ROUTES.MODAL} component={ModalPage} exact />
          <Route path={ROUTES.OVERLAY} component={OverlayPage} exact />
          <Route path={ROUTES.PAGINATION} component={PaginationPage} exact />
          <Route path={ROUTES.PORTAL} component={PortalPage} exact />
          <PrivateRoute
            path={ROUTES.PRIVATE_ROUTE}
            redirectTo={ROUTES.LOGIN}
            component={PrivateRoutePage}
          />
          <Route path={ROUTES.RATING} component={RatingPage} exact />
          <Route path={ROUTES.SCROLLBAR} component={ScrollbarPage} exact />
          <Route path={ROUTES.SELECT} component={SelectPage} exact />
          <Route path={ROUTES.SIDEBAR} component={SidebarPage} exact />
          <Route path={ROUTES.SPINNER} component={SpinnerPage} exact />
          <Route path={ROUTES.SKELETON} component={SkeletonPage} exact />
          <Route path={ROUTES.TABLE} component={TablePage} exact />
          <Route path={ROUTES.TABS} component={TabsPage} exact />
          <Route path={ROUTES.TEXTAREA} component={TextAreaPage} exact />
          <Route path={ROUTES.UPLOADER} component={UploaderPage} exact />
          <Route path={ROUTES.HOME} component={HomePage} exact />
        </Switch>
      </Layout>
    </div>
  );
};
