import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Icon } from "ui-kit";
import "./Search.scss";

export interface ISearchProps {
  className?: string;
  searchedKeyword?: string;
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<ISearchProps> = ({
  className,
  searchedKeyword,
  onSearchChange,
}) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  console.log("history: ", history);

  useEffect(() => {
    if (inputRef.current) {
      setIsActive(true);
      inputRef.current.focus();
    }
  }, [searchedKeyword]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  return (
    <div
      className={classNames("Search", className, {
        Search__active: isActive,
      })}
    >
      <form className="Search-Form">
        <div className="Search-InputWrapper">
          <input
            className="Search-Input"
            autoComplete="off"
            name="search"
            placeholder="Поиск"
            ref={inputRef}
            type="text"
            value={searchedKeyword}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
          />
        </div>
        <Icon className="Search-Icon" type="Search" />
      </form>
    </div>
  );
};
