import { type FC, memo } from "react";
import { Icon } from "uikit";
import "./ControlsPanel.scss";

type TProps = {
  onClick?: ({ type }: { type: "target" }) => void;
};

const ControlsPanelComponent: FC<TProps> = ({ onClick }) => {
  return (
    <div className="ControlsPanel">
      <div className="ControlsPanel-Control" onClick={() => onClick?.({ type: "target" })}>
        <Icon type="Target" />
      </div>
    </div>
  );
};

ControlsPanelComponent.displayName = "ControlsPanel";

export const ControlsPanel = memo(ControlsPanelComponent);
