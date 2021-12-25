import React from "react";
import classNames from "classnames";
import "./Tabs.scss";

export interface ITab {
  id: string | number;
  label?: string | number;
}

export interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick?: (id: string | number) => void;
}

export const Tabs: React.FC<ITabsProps> = ({
  className,
  selectedId,
  tabs,
  onClick,
}) => {
  return (
    <div className={classNames("Tabs", className)}>
      {tabs &&
        tabs.map(tab => (
          <div
            className={classNames("Tab", {
              Tab__selected: tab.id === selectedId,
            })}
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            <div
              className={classNames("TabLabel", {
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
