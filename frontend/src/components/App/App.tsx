import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "routes";
import { ButtonPage, HomePage, UploaderPage } from "pages";
import { Layout } from "components";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path={ROUTES.BUTTON} component={ButtonPage} />
          <Route path={ROUTES.UPLOADER} component={UploaderPage} />
          <Route path={ROUTES.HOME} component={HomePage} exact />
        </Switch>
      </Layout>
    </div>
  );
};
