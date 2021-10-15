import React from "react";
import { Spinner } from "ui-kit";
import "./SpinnerPage.scss";

export const SpinnerPage: React.FC = () => {
  return (
    <div className="SpinnerPage">
      <h2>Spinner</h2>
      <section className="SpinnerPage-Section">
        <Spinner />
      </section>
    </div>
  );
};
