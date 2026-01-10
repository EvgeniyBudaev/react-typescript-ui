import { type FC, memo } from "react";

import { IconButton } from "../../Button/IconButton";
import type { IconType } from "../../Icon/IconType";
import type { TFormatButtonProps } from "./types";
import "./FormatButton.scss";

const FormatButtonComponent: FC<TFormatButtonProps> = ({ isActive, onToggle, style, typeIcon }) => {
  return (
    <div
      className="FormatButton"
      onMouseDown={(event) => {
        event.preventDefault();
        onToggle?.(style);
      }}
    >
      <IconButton isActive={isActive} typeIcon={typeIcon as IconType} />
    </div>
  );
};

FormatButtonComponent.displayName = "FormatButton";

export const FormatButton = memo(FormatButtonComponent);
