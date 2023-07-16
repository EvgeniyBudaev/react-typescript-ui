import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CenterIcon,
  CheckboxIcon,
  CloseIcon,
  CopyIcon,
  DarkModeIcon,
  EditIcon,
  HomeIcon,
  LightModeIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SortingIcon,
  SortDownIcon,
  SortUpIcon,
  SpinnerIcon,
  SuccessIcon,
  TelegramIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from "uikit/assets/icons";

export type IconType =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Center"
  | "Checkbox"
  | "Close"
  | "Copy"
  | "DarkMode"
  | "Edit"
  | "Home"
  | "LightMode"
  | "Minus"
  | "Plus"
  | "Search"
  | "Settings"
  | "Sorting"
  | "SortDown"
  | "SortUp"
  | "Spinner"
  | "Success"
  | "Telegram"
  | "Visibility"
  | "VisibilityOff";

export const iconTypes = new Map([
  ["ArrowDown", <ArrowDownIcon key="ArrowDownIcon" />],
  ["ArrowLeft", <ArrowLeftIcon key="ArrowLeftIcon" />],
  ["ArrowRight", <ArrowRightIcon key="ArrowRightIcon" />],
  ["Center", <CenterIcon key="CenterIcon" />],
  ["Checkbox", <CheckboxIcon key="CheckboxIcon" />],
  ["Close", <CloseIcon key="CloseIcon" />],
  ["Copy", <CopyIcon key="CopyIcon" />],
  ["DarkMode", <DarkModeIcon key="DarkModeIcon" />],
  ["Edit", <EditIcon key="EditIcon" />],
  ["Home", <HomeIcon key="HomeIcon" />],
  ["LightMode", <LightModeIcon key="LightModeIcon" />],
  ["Minus", <MinusIcon key="MinusIcon" />],
  ["Plus", <PlusIcon key="PlusIcon" />],
  ["Search", <SearchIcon key="SearchIcon" />],
  ["Settings", <SettingsIcon key="Settings" />],
  ["Sorting", <SortingIcon key="Sorting" />],
  ["SortDown", <SortDownIcon key="SortDown" />],
  ["SortUp", <SortUpIcon key="SortUp" />],
  ["Spinner", <SpinnerIcon key="SpinnerIcon" />],
  ["Success", <SuccessIcon key="SuccessIcon" />],
  ["Telegram", <TelegramIcon key="TelegramIcon" />],
  ["Visibility", <VisibilityIcon key="VisibilityIcon" />],
  ["VisibilityOff", <VisibilityOffIcon key="VisibilityOffIcon" />],
]);
