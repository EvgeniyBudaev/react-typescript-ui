import { memo } from "react";
import type { FC } from "react";
import clsx from "clsx";
import "./Tabs.scss";

export type TTab = {
  id: string | number;
  label?: string | number;
};

type TProps = {
  className?: string;
  dataTestId?: string;
  onClick: (id: string | number) => void;
  selectedId: string | number;
  tabs: TTab[];
};

const TabsComponent: FC<TProps> = ({
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

export const Tabs = memo(TabsComponent);
