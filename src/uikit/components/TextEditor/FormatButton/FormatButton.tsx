import type { FC } from "react";
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

export const FormatButton: FC<TProps> = ({ isActive, onToggle, style, typeIcon }) => {
  return (
    <div
      className="FormatButton"
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle?.(style);
      }}
    >
      <IconButton isActive={isActive} typeIcon={typeIcon as IconType} />
    </div>
  );
};
