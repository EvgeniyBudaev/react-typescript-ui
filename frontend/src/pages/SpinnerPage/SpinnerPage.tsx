import type { FC } from "react";
import { Spinner } from "uikit";
import "./SpinnerPage.scss";

export const SpinnerPage: FC = () => {
  return (
    <section className="SpinnerPage">
      <h2>Spinner</h2>
      <section className="SpinnerPage-Section">
        <Spinner />
      </section>
    </section>
  );
};
