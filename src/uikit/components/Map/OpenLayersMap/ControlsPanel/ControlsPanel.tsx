import { type FC, memo } from "react";
import { Icon } from "uikit";
import "./ControlsPanel.scss";

type TProps = {
  onClick?: (type: "target") => void;
};

const ControlsPanelComponent: FC<TProps> = ({ onClick }) => {
  return (
    <div className="ControlsPanel">
      <div className="ControlsPanel-Map-Group">
        <div className="ControlsPanel-Group ControlsPanel-Group-Button">
          <div className="ControlsPanel-Control" onClick={() => onClick?.("target")}>
            <Icon type="Target" />
          </div>
        </div>
      </div>
    </div>
  );
};

ControlsPanelComponent.displayName = "ControlsPanel";

export const ControlsPanel = memo(ControlsPanelComponent);
