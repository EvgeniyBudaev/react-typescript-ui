import React, { useState } from "react";
import type { FC } from "react";
import { Hr, Title } from "components";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import type { TCalendarValue } from "uikit";
import { Calendar } from "uikit";
import "./DatePickerPage.scss";

export const DatePickerPage: FC = () => {
  const [value, onChange] = useState<TCalendarValue>(new Date());
  const formattedValue =
    value && !Array.isArray(value) ? format(value, "dd.MM.yyyy", { locale: enUS }) : "";

  return (
    <section>
      <Title>Calendar</Title>
      <Calendar locale={enUS.code} onChange={onChange} value={value} />
      <div>
        <pre>{JSON.stringify(formattedValue, null, 2)}</pre>
      </div>
      <Hr />
    </section>
  );
};
