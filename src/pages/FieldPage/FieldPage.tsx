import { enUS } from "date-fns/locale";
import { useState } from "react";
import type { FC } from "react";
import { Title } from "components";
import { InputDateField } from "uikit";
import "./FieldPage.scss";

export const FieldPage: FC = () => {
  const [valueInputDateField, setValueInputDateField] = useState<Date | null>(new Date());

  return (
    <section className="FieldPage">
      <Title>Input date field</Title>
      <div className="FieldPage-Field">
        <InputDateField
          locale={enUS}
          onChange={setValueInputDateField}
          onFieldClear={() => setValueInputDateField(null)}
          placeholder="Date"
          value={valueInputDateField}
        />
      </div>
    </section>
  );
};
