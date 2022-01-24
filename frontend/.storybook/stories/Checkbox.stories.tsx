import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "ui-kit";
import { ICheckedGroup } from "../../src/pages/CheckboxPage/CheckboxPage";

export default { title: "Checkbox" };

export const stories = () => {
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
    <div>
      <div className="story">
        <label>Checkbox</label>
        <Checkbox
          isChecked={checkedBox}
          id={"1"}
          value="Single"
          onChange={handleChangeCheckedBox}
        />
      </div>
      <div className="story">
        <label>Checkbox Group</label>
        <div style={{ display: "inline-flex", flexDirection: "column" }}>
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
      </div>
    </div>
  );
};
