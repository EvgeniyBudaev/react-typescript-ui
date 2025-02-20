import { type FC, memo } from "react";
import { IconButton } from "../../Button";
import type { IconType } from "../../Icon/IconType";
import "./FormatButton.scss";

type TProps = {
  isActive?: boolean;
  onToggle: (style: string) => void;
  size?: string;
  style: string;
  typeIcon: IconType | string;
};

const FormatButtonComponent: FC<TProps> = ({ isActive, onToggle, style, typeIcon }) => {
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
