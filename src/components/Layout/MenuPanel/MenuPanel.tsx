import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { ERoutes } from "enums";
import { ETypographyVariant, Typography } from "uikit";
import { formatToCapitalize } from "utils";
import "./MenuPanel.scss";

export const MenuPanel: FC = () => {
  const navList = [
    ERoutes.Accordion,
    ERoutes.Autocomplete,
    ERoutes.Avatar,
    ERoutes.Breadcrumbs,
    ERoutes.Button,
    ERoutes.Canvas,
    ERoutes.Checkbox,
    ERoutes.Copy,
    ERoutes.DatePicker,
    ERoutes.DocumentViewer,
    ERoutes.DropDown,
    ERoutes.Field,
    ERoutes.Form,
    ERoutes.Hamburger,
    ERoutes.Icon,
    ERoutes.Modal,
    ERoutes.Overlay,
    ERoutes.Popover,
    ERoutes.Portal,
    ERoutes.PrivateRoute,
    ERoutes.RadioButton,
    ERoutes.RangeSlider,
    ERoutes.Rating,
    ERoutes.Scrollbar,
    ERoutes.Select,
    ERoutes.Sidebar,
    ERoutes.Skeleton,
    ERoutes.Slider,
    ERoutes.Spinner,
    ERoutes.Switcher,
    ERoutes.Table,
    ERoutes.Tabs,
    ERoutes.TextEditor,
    ERoutes.Tooltip,
    ERoutes.Typography,
    ERoutes.WordWrap,
  ];

  return (
    <nav className="MenuPanel">
      <div className="MenuPanel-Brand">
        <div className="MenuPanel-BrandTitle">
          <Link className="MenuPanel-BrandTitleLink" to={ERoutes.Root}>
            UI
          </Link>
        </div>
        <div className="MenuPanel-BrandVersion">v1.1.0</div>
      </div>
      <div className="MenuPanel-Title">Components</div>
      <div className="MenuPanel-List">
        {navList.map((item: ERoutes) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "MenuPanel-ListItem MenuPanel-ListItem__active" : "MenuPanel-ListItem"
            }
            key={item}
            to={item}
          >
            <Typography variant={ETypographyVariant.TextB3Regular}>
              {formatToCapitalize(item.slice(1))}
            </Typography>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
