import React from "react";
import { Button } from "ui-kit";
import { Layout } from "components";
import "./App.scss";

export const App: React.FC = () => {

  const handleButtonClick = (event: React.MouseEvent) => {
    console.log("[button click event]", event);
  };

  return (
    <div className="App">
      <Layout>
        <h1>React TypeScript UI Library</h1>
        <hr />
        <h2>Button</h2>
        <Button isDisabled={false} onClick={handleButtonClick}>Send</Button>
      </Layout>
    </div>
  );
};
