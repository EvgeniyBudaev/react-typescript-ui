import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "ui-kit";
import "./CheckboxPage.scss";

export interface ICheckedGroup {
  category: string[];
}

export const CheckboxPage: React.FC = () => {
  const checkboxGroupOptions = {
    category: ["Smartphones", "Notebooks"],
  };
  const [checkedBoxByGroup, setCheckedBoxByGroup] = useState<ICheckedGroup>({
    category: [],
  });
  const [checkedBox, setCheckedBox] = useState(false);

  const handleChangeCheckedBox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckedBox(event.target.checked);
  };

  const handleChangeCheckedGroup = (
    { target: { checked, value } },
    nameGroup
  ) => {
    if (checked) {
      if (checkedBoxByGroup[nameGroup].includes(value)) {
        setCheckedBoxByGroup(prevState => ({
          ...prevState,
        }));
      } else {
        setCheckedBoxByGroup(prevState => ({
          ...prevState,
          [nameGroup]: [...prevState[nameGroup], value],
        }));
      }
    } else {
      setCheckedBoxByGroup(prevState => ({
        ...prevState,
        [nameGroup]: [...prevState[nameGroup].filter(x => x !== value)],
      }));
    }
  };

  return (
    <div className="CheckboxPage">
      <h2>Checkbox</h2>
      <Checkbox
        isChecked={checkedBox}
        id={"1"}
        value="Single"
        onChange={handleChangeCheckedBox}
      />
      <div>
        <pre>{JSON.stringify(checkedBox, null, 2)}</pre>
      </div>
      <h2>Checkbox Group</h2>
      <div className="CheckboxPage-CheckboxGroup">
        {checkboxGroupOptions.category.map(value => (
          <CheckboxGroup
            checkedBoxByGroup={checkedBoxByGroup}
            id={value}
            key={value}
            nameGroup="category"
            value={value}
            onChange={(event, nameGroup) =>
              handleChangeCheckedGroup(event, nameGroup)
            }
          />
        ))}
      </div>
      <div>
        <pre>{JSON.stringify(checkedBoxByGroup, null, 2)}</pre>
      </div>
    </div>
  );
};