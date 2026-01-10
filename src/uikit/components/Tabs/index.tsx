import clsx from "clsx";
import { memo, type FC } from "react";

import type { TTab, TTabsProps } from "./types";
import "./Tabs.scss";

const TabsComponent: FC<TTabsProps> = ({
  className,
  dataTestId = "uikit__tabs",
  onClick,
  selectedId,
  tabs,
}) => {
  return (
    <div className={clsx("Tabs", className)} data-testid={dataTestId}>
      {tabs &&
        tabs.map((tab: TTab) => (
          <div
            className={clsx("Tab", {
              Tab__selected: tab.id === selectedId,
            })}
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            <div
              className={clsx("TabLabel", {
                TabLabel__selected: tab.id === selectedId,
              })}
            >
              {tab.label}
            </div>
          </div>
        ))}
    </div>
  );
};

TabsComponent.displayName = "Tabs";

export const Tabs = memo(TabsComponent);
