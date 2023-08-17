import { useState } from "react";
import type { ChangeEvent, FC } from "react";
import { Title } from "components";
import { Checkbox } from "uikit";

type TParams = Record<string, any>;

export const CheckboxPage: FC = () => {
  const idCheckbox = "d6e3c25b-2e4d-4ac0-b229-3ed19d7f479e";
  const [filter, setFilter] = useState<TParams>({ enabled: [] });

  const onChangeCheckedBox = (
    event: ChangeEvent<HTMLInputElement>,
    id: string,
    nameGroup: string,
  ) => {
    const {
      target: { checked, value },
    } = event;

    if (checked) {
      setFilter({
        ...filter,
        [nameGroup]: [...filter[nameGroup], value],
      });
    } else {
      setFilter({
        ...filter,
        [nameGroup]: [...filter[nameGroup].filter((x: string) => x !== value)],
      });
    }
  };

  return (
    <section>
      <Title>Checkbox</Title>
      <div>
        <Checkbox
          checked={filter && filter["enabled"].includes(idCheckbox)}
          id={idCheckbox}
          label={"enabled"}
          name={"enabled"}
          nameGroup={"enabled"}
          onChange={(event, id, nameGroup) => onChangeCheckedBox(event, id, nameGroup)}
        />
      </div>
      <div>
        <pre>{JSON.stringify(filter, null, 2)}</pre>
      </div>
    </section>
  );
};
