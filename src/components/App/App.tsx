import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components";
import { PrivateRoutes } from "components/route/PrivateRoutes";
import { ERoutes } from "enums";
import {
  AccordionPage,
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
  SpinnerPage,
  SwitcherPage,
  TablePage,
  TabsPage,
  TooltipPage,
  TypographyPage,
} from "pages";
import { ThemeProvider } from "services/context";
import { useTheme } from "uikit";
import "./App.scss";

export const App: FC = () => {
  const themeState = useTheme();

  return (
    <ThemeProvider value={themeState}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path={ERoutes.Accordion} element={<AccordionPage />} />
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
            <Route element={<PrivateRoutes isAuthenticated={false} />}>
              <Route path={ERoutes.PrivateRoute} element={<PrivateRoutePage />} />
            </Route>
            <Route path={ERoutes.Rating} element={<RatingPage />} />
            <Route path={ERoutes.Scrollbar} element={<ScrollbarPage />} />
            <Route path={ERoutes.Select} element={<SelectPage />} />
            <Route path={ERoutes.Sidebar} element={<SidebarPage />} />
            <Route path={ERoutes.Skeleton} element={<SkeletonPage />} />
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
  );
};
