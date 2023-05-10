import React from "react";
import type { FC } from "react";
import { Title } from "components";
import { Spinner } from "uikit";
import "./SpinnerPage.scss";

export const SpinnerPage: FC = () => {
  return (
    <section className="SpinnerPage">
      <Title>Spinner</Title>
      <section className="SpinnerPage-Section">
        <Spinner />
      </section>
    </section>
  );
};
