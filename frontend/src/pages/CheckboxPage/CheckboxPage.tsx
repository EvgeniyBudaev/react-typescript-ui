import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "ui-kit";
import "./CheckboxPage.scss";

export interface ICheckedGroup {
  [T: string]: string[];
}

export interface ICheckboxGroupOption {
  option: {
    optionNameRu: string;
    optionNameOnBackend: string;
  };
  entities: string[];
}

export const CheckboxPage: React.FC = () => {
  const checkboxGroupOptions: ICheckboxGroupOption[] = [
    {
      option: { optionNameRu: "Категория", optionNameOnBackend: "category" },
      entities: ["Smartphones", "Notebooks"],
    },
    {
      option: { optionNameRu: "Форма", optionNameOnBackend: "form" },
      entities: ["Круглая", "Овальная", "Прямоугольная", "Фигурная"],
    },
  ];
  const [checkedBoxByGroup, setCheckedBoxByGroup] = useState<ICheckedGroup>({
    category: [],
    form: [],
  });
  const [checkedBox, setCheckedBox] = useState(false);

  const handleChangeCheckedBox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckedBox(event.target.checked);
  };

  const handleChangeCheckedBoxGroup = (
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
    <section className="CheckboxPage">
      <h2>Checkbox</h2>
      <Checkbox
        isChecked={checkedBox}
        id="1"
        label="Single"
        onChange={handleChangeCheckedBox}
      />
      <div>
        <pre>{JSON.stringify(checkedBox, null, 2)}</pre>
      </div>
      <h2>Checkbox Group</h2>
      <div className="CheckboxPage-CheckboxGroupInner">
        {checkboxGroupOptions.map((item, index) => (
          <div className="CheckboxPage-CheckboxGroup" key={index}>
            {item.entities.map((label, index) => (
              <CheckboxGroup
                id={index.toString() + label}
                label={label}
                checkedBoxByGroup={checkedBoxByGroup}
                key={index}
                nameGroup={item.option.optionNameOnBackend}
                onChange={handleChangeCheckedBoxGroup}
              />
            ))}
          </div>
        ))}
      </div>
      <div>
        <pre>{JSON.stringify(checkedBoxByGroup, null, 2)}</pre>
      </div>
    </section>
  );
};
