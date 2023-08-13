import { enUS } from "date-fns/locale";
import { useState } from "react";
import type { FC } from "react";
import { Hr, Title } from "components";
import { InputDateField, InputDateRangeField } from "uikit";
import "./FieldPage.scss";

type TPeriodValue = [Date | null, Date | null];

export const FieldPage: FC = () => {
  // Input date field
  const [valueInputDateField, setValueInputDateField] = useState<Date | null>(new Date());

  // Input date range field
  const [valueInputDateRangeField, setValueInputDateRangeField] = useState<TPeriodValue>([
    new Date(),
    new Date(),
  ]);

  const handleChangeInputDateRangeField = (periodValue: TPeriodValue) => {
    setValueInputDateRangeField(periodValue);
  };

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
      <Hr />
      <Title>Input date range field</Title>
      <InputDateRangeField
        classes={{ inputDateField: "FieldPage-Field" }}
        locale={enUS}
        onChange={handleChangeInputDateRangeField}
        onFieldClear={handleChangeInputDateRangeField}
        placeholder={["Date", "Date"]}
        title={["From", "To"]}
        value={valueInputDateRangeField}
      />
    </section>
  );
};
