import React, { useEffect, useRef, useState } from "react";
import { DropDown } from "ui-kit";
import "./DropDownPage.scss";

export const DropDownPage: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const refToggleDropDown = useRef(null);

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideDropDown);
    return () => {
      window.removeEventListener("click", handleClickOutsideDropDown);
    };
  });

  const handleClickOutsideDropDown = (event: MouseEvent) => {
    if (isDropDownOpen) {
      if (refToggleDropDown.current) {
        if (!refToggleDropDown.current.contains(event.target)) {
          setIsDropDownOpen(false);
        }
      }
    }
  };

  const handleToggleDropDown = () => {
    setIsDropDownOpen(prevState => !prevState);
  };

  return (
    <section className="DropDownPage">
      <h2>DropDown</h2>
      <nav className="DropDownPage-Navigation">
        <ul className="DropDownPage-Menu">
          <li className="DropDownPage-MenuItem">Home</li>
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
          <li className="DropDownPage-MenuItem">About</li>
          <li className="DropDownPage-MenuItem">Contacts</li>
        </ul>
      </nav>
    </section>
  );
};
