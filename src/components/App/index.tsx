import { SOCKET_RECEIVE_THEME } from "constants/socket";
import { useEffect } from "react";
import type { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { ERoutes } from "enums/routes";
import { useSocket } from "hooks/useSocket";
import { SocketProvider } from "services/context/socketContext";
import { ThemeProvider } from "services/context/themeContext";
import { useTheme } from "uikit";

import { AccordionPage } from "../../pages/AccordionPage";
import { AutocompletePage } from "../../pages/AutocompletePage";
import { AvatarPage } from "../../pages/AvatarPage";
import { BreadcrumbsDetailPage } from "../../pages/BreadcrumbsPage/BreadcrumbsDetailPage";
import { BreadcrumbsPage } from "../../pages/BreadcrumbsPage";
import { ButtonPage } from "../../pages/ButtonPage";
import { CanvasImageResizePage } from "../../pages/CanvasImageResizePage";
import { CheckboxPage } from "../../pages/CheckboxPage";
import { CopyPage } from "../../pages/CopyPage";
import { DatePickerPage } from "../../pages/DatePickerPage";
import { DocumentViewerPage } from "../../pages/DocumentViewerPage";
import { DropDownPage } from "../../pages/DropDownPage";
import { FieldPage } from "../../pages/FieldPage";
import { FormPage } from "../../pages/FormPage";
import { HamburgerPage } from "../../pages/HamburgerPage";
import { IconPage } from "../../pages/IconPage";
import { Layout } from "../Layout";
import { MapPage } from "../../pages/MapPage";
import { ModalPage } from "../../pages/ModalPage";
import { OverlayPage } from "../../pages/OverlayPage";
import { PopoverPage } from "../../pages/PopoverPage";
import { PortalPage } from "../../pages/PortalPage";
import { PrivateRoutes } from "../route/PrivateRoutes";
import { PrivateRoutePage } from "../../pages/PrivateRoutePage";
import { RadioButtonPage } from "../../pages/RadioButtonPage";
import { RangeSliderPage } from "../../pages/RangeSliderPage";
import { RatingPage } from "../../pages/RatingPage";
import { ScrollbarPage } from "../../pages/ScrollbarPage";
import { SelectPage } from "../../pages/SelectPage";
import { SidebarPage } from "../../pages/SidebarPage";
import { SkeletonPage } from "../../pages/SkeletonPage";
import { SliderPage } from "../../pages/SliderPage";
import { SpinnerPage } from "../../pages/SpinnerPage";
import { SwitcherPage } from "../../pages/SwitcherPage";
import { TablePage } from "../../pages/TablePage";
import { TabsPage } from "../../pages/TabsPage";
import { TextEditorPage } from "../../pages/TextEditorPage";
import { TooltipPage } from "../../pages/TooltipPage";
import { TypographyPage } from "../../pages/TypographyPage";
import { WordWrapPage } from "../../pages/WordWrapPage";
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
              <Route path={ERoutes.Canvas} element={<CanvasImageResizePage />} />
              <Route path={ERoutes.Checkbox} element={<CheckboxPage />} />
              <Route path={ERoutes.Copy} element={<CopyPage />} />
              <Route path={ERoutes.DatePicker} element={<DatePickerPage />} />
              <Route path={ERoutes.DocumentViewer} element={<DocumentViewerPage />} />
              <Route path={ERoutes.DropDown} element={<DropDownPage />} />
              <Route path={ERoutes.Field} element={<FieldPage />} />
              <Route path={ERoutes.Form} element={<FormPage />} />
              <Route path={ERoutes.Hamburger} element={<HamburgerPage />} />
              <Route path={ERoutes.Icon} element={<IconPage />} />
              <Route path={ERoutes.Map} element={<MapPage />} />
              <Route path={ERoutes.Modal} element={<ModalPage />} />
              <Route path={ERoutes.Overlay} element={<OverlayPage />} />
              <Route path={ERoutes.Popover} element={<PopoverPage />} />
              <Route path={ERoutes.Portal} element={<PortalPage />} />
              <Route
                element={<PrivateRoutes isAuthenticated={false} redirectPath={ERoutes.Root} />}
              >
                <Route path={ERoutes.PrivateRoute} element={<PrivateRoutePage />} />
              </Route>
              <Route path={ERoutes.RadioButton} element={<RadioButtonPage />} />
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
              <Route path={ERoutes.WordWrap} element={<WordWrapPage />} />
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </SocketProvider>
  );
};
