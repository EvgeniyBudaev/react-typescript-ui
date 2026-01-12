import { Title } from "components/Title";
import { DropDown } from "uikit";

import "./DropDownPage.scss";

export const DropDownPage: FC = () => {
  return (
    <section className="DropDownPage">
      <Title>DropDown</Title>
      <nav className="DropDownPage-Navigation">
        <ul className="DropDownPage-Menu">
          <DropDown>
            <DropDown.Button classes={{ dropDownButton: "DropDownPage-MenuItem" }}>
              <span>Smartphones</span>
            </DropDown.Button>
            <DropDown.Panel classes={{ dropDownPanel: "DropDownCatalog" }}>
              <ul className="DropDownCatalog-Menu">
                <li className="DropDownCatalog-MenuItem">Apple</li>
                <li className="DropDownCatalog-MenuItem">Samsung</li>
                <li className="DropDownCatalog-MenuItem">Huawei</li>
              </ul>
            </DropDown.Panel>
          </DropDown>
          <DropDown>
            <DropDown.Button classes={{ dropDownButton: "DropDownPage-MenuItem" }}>
              <span>Notebooks</span>
            </DropDown.Button>
            <DropDown.Panel classes={{ dropDownPanel: "DropDownCatalog" }}>
              <ul className="DropDownCatalog-Menu">
                <li className="DropDownCatalog-MenuItem">Lenovo</li>
                <li className="DropDownCatalog-MenuItem">Asus</li>
                <li className="DropDownCatalog-MenuItem">MSI</li>
              </ul>
            </DropDown.Panel>
          </DropDown>
        </ul>
      </nav>
    </section>
  );
};
