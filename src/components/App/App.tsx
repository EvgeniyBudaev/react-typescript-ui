import { SOCKET_RECEIVE_THEME } from "constants/socket";
import { useEffect } from "react";
import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, PrivateRoutes } from "components";
import { ERoutes } from "enums";
import { useSocket } from "hooks";
import {
  AccordionPage,
  AutocompletePage,
  AvatarPage,
  BreadcrumbsPage,
  BreadcrumbsDetailPage,
  ButtonPage,
  CheckboxPage,
  CopyPage,
  DatePickerPage,
  DocumentViewerPage,
  DropDownPage,
  FieldPage,
  FormPage,
  HamburgerPage,
  IconPage,
  ModalPage,
  OverlayPage,
  PopoverPage,
  PortalPage,
  PrivateRoutePage,
  RangeSliderPage,
  RatingPage,
  ScrollbarPage,
  SelectPage,
  SidebarPage,
  SkeletonPage,
  SliderPage,
  SpinnerPage,
  SwitcherPage,
  TablePage,
  TabsPage,
  TextEditorPage,
  TooltipPage,
  TypographyPage,
} from "pages";
import { SocketProvider, ThemeProvider } from "services/context";
import { useTheme } from "uikit";
import "./App.scss";

export const App: FC = () => {
  const themeState = useTheme();
  const socket = useSocket("http://localhost:3001");

  useEffect(() => {
    if (!socket) return;
    socket.on(SOCKET_RECEIVE_THEME, (data) => {
      themeState?.onChangeTheme(data);
    });
    return () => {
      socket && socket.close();
    };
  }, [socket]);

  return (
    <SocketProvider value={socket}>
      <ThemeProvider value={themeState}>
        <div className="App">
          <Layout>
            <Routes>
              <Route path={ERoutes.Accordion} element={<AccordionPage />} />
              <Route path={ERoutes.Autocomplete} element={<AutocompletePage />} />
              <Route path={ERoutes.Avatar} element={<AvatarPage />} />
              <Route path={`${ERoutes.Breadcrumbs}/:id`} element={<BreadcrumbsDetailPage />} />
              <Route path={ERoutes.Breadcrumbs} element={<BreadcrumbsPage />} />
              <Route path={ERoutes.Button} element={<ButtonPage />} />
              <Route path={ERoutes.Checkbox} element={<CheckboxPage />} />
              <Route path={ERoutes.Copy} element={<CopyPage />} />
              <Route path={ERoutes.DatePicker} element={<DatePickerPage />} />
              <Route path={ERoutes.DocumentViewer} element={<DocumentViewerPage />} />
              <Route path={ERoutes.DropDown} element={<DropDownPage />} />
              <Route path={ERoutes.Field} element={<FieldPage />} />
              <Route path={ERoutes.Form} element={<FormPage />} />
              <Route path={ERoutes.Hamburger} element={<HamburgerPage />} />
              <Route path={ERoutes.Icon} element={<IconPage />} />
              <Route path={ERoutes.Modal} element={<ModalPage />} />
              <Route path={ERoutes.Overlay} element={<OverlayPage />} />
              <Route path={ERoutes.Popover} element={<PopoverPage />} />
              <Route path={ERoutes.Portal} element={<PortalPage />} />
              <Route
                element={<PrivateRoutes isAuthenticated={false} redirectPath={ERoutes.Root} />}
              >
                <Route path={ERoutes.PrivateRoute} element={<PrivateRoutePage />} />
              </Route>
              <Route path={ERoutes.RangeSlider} element={<RangeSliderPage />} />
              <Route path={ERoutes.Rating} element={<RatingPage />} />
              <Route path={ERoutes.Scrollbar} element={<ScrollbarPage />} />
              <Route path={ERoutes.Select} element={<SelectPage />} />
              <Route path={ERoutes.Sidebar} element={<SidebarPage />} />
              <Route path={ERoutes.Skeleton} element={<SkeletonPage />} />
              <Route path={ERoutes.Slider} element={<SliderPage />} />
              <Route path={ERoutes.Spinner} element={<SpinnerPage />} />
              <Route path={ERoutes.Switcher} element={<SwitcherPage />} />
              <Route path={ERoutes.Table} element={<TablePage />} />
              <Route path={ERoutes.Tabs} element={<TabsPage />} />
              <Route path={ERoutes.TextEditor} element={<TextEditorPage />} />
              <Route path={ERoutes.Tooltip} element={<TooltipPage />} />
              <Route path={ERoutes.Typography} element={<TypographyPage />} />
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </SocketProvider>
  );
};
