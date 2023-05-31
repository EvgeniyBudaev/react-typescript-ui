import { useEffect, useState } from "react";
import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "socket.io-client";
import type { Socket } from "socket.io-client";
import type { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Layout, PrivateRoutes } from "components";
import { ERoutes } from "enums";
import {
  AccordionPage,
  AutocompletePage,
  AvatarPage,
  BreadcrumbsPage,
  BreadcrumbsDetailPage,
  ButtonPage,
  CheckboxPage,
  CopyPage,
  DocumentViewerPage,
  DropDownPage,
  FormPage,
  HamburgerPage,
  IconPage,
  ModalPage,
  OverlayPage,
  PopoverPage,
  PortalPage,
  PrivateRoutePage,
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
  TooltipPage,
  TypographyPage,
} from "pages";
import { SocketProvider, ThemeProvider } from "services/context";
import { useTheme } from "uikit";
import "./App.scss";

export const App: FC = () => {
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const themeState = useTheme();

  useEffect(() => {
    const connection = connect("http://localhost:3001");
    setSocket(connection);
    return () => {
      connection.close();
    };
  }, []);

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
              <Route path={ERoutes.DocumentViewer} element={<DocumentViewerPage />} />
              <Route path={ERoutes.DropDown} element={<DropDownPage />} />
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
              <Route path={ERoutes.Tooltip} element={<TooltipPage />} />
              <Route path={ERoutes.Typography} element={<TypographyPage />} />
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </SocketProvider>
  );
};
