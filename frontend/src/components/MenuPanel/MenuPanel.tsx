import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "routes";
import "./MenuPanel.scss";

export const MenuPanel: React.FC = () => {
  return (
    <nav className="MenuPanel">
      <div className="MenuPanel-Brand">
        <div className="MenuPanel-BrandTitle">UI</div>
        <div className="MenuPanel-BrandVersion">v1.0.0</div>
      </div>
      <div className="MenuPanel-Title">Components</div>
      <div className="MenuPanel-List">

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.BUTTON}
        >
          Button
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.ICON}
        >
          Icon
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.UPLOADER}
        >
          Uploader
        </NavLink>

      </div>
    </nav>
    )
};
