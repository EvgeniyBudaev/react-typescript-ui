import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "routes";
import { useTypedSelector } from "hooks/useTypedSelector";
import { logout } from "services/account";
import { Avatar, DropDown, Icon } from "ui-kit";
import "./Header.scss";

export const Header: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const refToggleDropDown = useRef(null);
  const { accessToken: isAuthenticated } = useTypedSelector(
    state => state.account
  );
  console.log("isAuthenticated ", isAuthenticated);

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

  const handleLogout = () => {
    dispatch(logout());
    history.push(ROUTES.HOME);
  };

  return (
    <header className="Header">
      {isAuthenticated ? (
        <div className="AvatarDropDown" ref={refToggleDropDown}>
          <Avatar
            image="https://portal.staralliance.com/imagelibrary/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
            size={46}
            onClick={handleToggleDropDown}
          />
          <DropDown className="DropDownUser" isOpen={isDropDownOpen}>
            <ul className="AvatarDropDown_Menu">
              <li className="AvatarDropDown_MenuItem" onClick={handleLogout}>
                <Icon className="AvatarDropDown_MenuItemIcon" type="Exit" />
                <div className="AvatarDropDown_MenuItemText">Выйти</div>
              </li>
            </ul>
          </DropDown>
        </div>
      ) : (
        <Link className="Header-Login" to={ROUTES.LOGIN}>
          Войти
        </Link>
      )}
    </header>
  );
};
