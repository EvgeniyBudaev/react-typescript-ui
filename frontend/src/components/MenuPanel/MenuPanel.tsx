import React from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";
import { ROUTES } from "routes";
import { IBreadcrumbsLocationState } from "ui-kit/Breadcrumbs";
import "./MenuPanel.scss";

export const MenuPanel: React.FC = () => {
  const history = useHistory();
  const location = useLocation<IBreadcrumbsLocationState[]>();
  const { pathname } = location;

  const handleClick = (pathname: string, title: string) => {
    const initialBreadcrumb = [{ path: "/", url: "/", title: title }];
    history.replace({ pathname: pathname, state: initialBreadcrumb });
  };

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

        <div
          className={classNames("MenuPanel-ListItem", {
            "MenuPanel-ListItem__active": pathname === ROUTES.BREADCRUMBS,
          })}
          onClick={() => handleClick(ROUTES.BREADCRUMBS, "Home")}
        >
          Breadcrumbs
        </div>

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
          to={ROUTES.COPY}
        >
          Copy
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
          to={ROUTES.DROPDOWN}
        >
          DropDown
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.ERROR}
        >
          Error
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.FORM}
        >
          Form
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
          to={ROUTES.PAGINATION}
        >
          Pagination
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.PORTAL}
        >
          Portal
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.PRIVATE_ROUTE}
        >
          Private Route
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.RATING}
        >
          Rating
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
          to={ROUTES.SIDEBAR}
        >
          Sidebar
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.SKELETON}
        >
          Skeleton
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
          to={ROUTES.TABLE}
        >
          Table
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.TABS}
        >
          Tabs
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.TEXTAREA}
        >
          TextArea
        </NavLink>

        <NavLink
          className="MenuPanel-ListItem"
          activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.TOOLTIP}
        >
          Tooltip
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
