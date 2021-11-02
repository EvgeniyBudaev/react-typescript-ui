import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "routes";
import "./MenuPanel.scss";

export const MenuPanel: React.FC = () => {
  return (
    <nav className="MenuPanel">
      <div className="MenuPanel-Brand">
        <div className="MenuPanel-BrandTitle">
          <Link className="MenuPanel-BrandTitleLink" to={ROUTES.HOME}>
            UI
          </Link>
        </div>
        <div className="MenuPanel-BrandVersion">v1.0.0</div>
      </div>
      <div className="MenuPanel-Title">Components</div>
      <div className="MenuPanel-List">
        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.ACCORDION}
        >
          Accordion
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.AVATAR}
        >
          Avatar
        </NavLink>

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
          to={ROUTES.CHECKBOX}
        >
          Checkbox
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.DOCUMENT_VIEWER}
        >
          Document Viewer
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.HAMBURGER}
        >
          Hamburger
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
          to={ROUTES.ICON_BUTTON}
        >
          IconButton
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.MODAL}
        >
          Modal
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.OVERLAY}
        >
          Overlay
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.SCROLLBAR}
        >
          Scrollbar
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.SELECT}
        >
          Select
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.SPINNER}
        >
          Spinner
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
  );
};
