import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { DropDown } from "uikit";
import "./DropDownPage.scss";

export const DropDownPage: FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const refToggleDropDown = useRef<HTMLLIElement>(null);

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideDropDown);
    return () => {
      window.removeEventListener("click", handleClickOutsideDropDown);
    };
  });

  const handleClickOutsideDropDown = (event: MouseEvent) => {
    if (isDropDownOpen) {
      if (refToggleDropDown.current && event.target instanceof HTMLElement) {
        if (!refToggleDropDown.current.contains(event.target)) {
          setIsDropDownOpen(false);
        }
      }
    }
  };

  const handleToggleDropDown = () => {
    setIsDropDownOpen((prevState?: boolean) => !prevState);
  };

  return (
    <section className="DropDownPage">
      <h2>DropDown</h2>
      <nav className="DropDownPage-Navigation">
        <ul className="DropDownPage-Menu">
          <li
            className="DropDownPage-MenuItem"
            ref={refToggleDropDown}
            onClick={handleToggleDropDown}
          >
            <span>Catalog</span>
            <DropDown className="DropDownCatalog" isOpen={isDropDownOpen}>
              <ul className="DropDownCatalog-Menu">
                <li className="DropDownCatalog-MenuItem">Smartphones</li>
                <li className="DropDownCatalog-MenuItem">Notebooks</li>
                <li className="DropDownCatalog-MenuItem">TV</li>
              </ul>
            </DropDown>
          </li>
        </ul>
      </nav>
    </section>
  );
};
