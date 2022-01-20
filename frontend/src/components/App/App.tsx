import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "routes";
import {
  AccordionPage,
  AvatarPage,
  ButtonPage,
  CheckboxPage,
  DocumentViewerPage,
  FormPage,
  HamburgerPage,
  HomePage,
  IconPage,
  IconButtonPage,
  ModalPage,
  OverlayPage,
  PaginationPage,
  RatingPage,
  ScrollbarPage,
  SelectPage,
  SidebarPage,
  SpinnerPage,
  TablePage,
  TabsPage,
  TextAreaPage,
  UploaderPage,
} from "pages";
import { Layout } from "components";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path={ROUTES.ACCORDION} component={AccordionPage} />
          <Route path={ROUTES.AVATAR} component={AvatarPage} />
          <Route path={ROUTES.BUTTON} component={ButtonPage} />
          <Route path={ROUTES.CHECKBOX} component={CheckboxPage} />
          <Route path={ROUTES.DOCUMENT_VIEWER} component={DocumentViewerPage} />
          <Route path={ROUTES.FORM} component={FormPage} />
          <Route path={ROUTES.HAMBURGER} component={HamburgerPage} />
          <Route path={ROUTES.ICON_BUTTON} component={IconButtonPage} />
          <Route path={ROUTES.ICON} component={IconPage} />
          <Route path={ROUTES.MODAL} component={ModalPage} />
          <Route path={ROUTES.OVERLAY} component={OverlayPage} />
          <Route path={ROUTES.PAGINATION} component={PaginationPage} />
          <Route path={ROUTES.RATING} component={RatingPage} />
          <Route path={ROUTES.SCROLLBAR} component={ScrollbarPage} />
          <Route path={ROUTES.SELECT} component={SelectPage} />
          <Route path={ROUTES.SIDEBAR} component={SidebarPage} />
          <Route path={ROUTES.SPINNER} component={SpinnerPage} />
          <Route path={ROUTES.TABLE} component={TablePage} />
          <Route path={ROUTES.TABS} component={TabsPage} />
          <Route path={ROUTES.TEXTAREA} component={TextAreaPage} />
          <Route path={ROUTES.UPLOADER} component={UploaderPage} />
          <Route path={ROUTES.HOME} component={HomePage} exact />
        </Switch>
      </Layout>
    </div>
  );
};
