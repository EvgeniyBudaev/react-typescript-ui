import type { FC } from "react";
import { IconButton } from "../../Button";
import type { IconType } from "../../Icon/IconType";

type TProps = {
  isActive?: boolean;
  onToggle: (style: string) => void;
  size?: string;
  style: string;
  typeIcon: IconType | string;
};

export const FormatButton: FC<TProps> = ({ isActive, onToggle, size, style, typeIcon }) => {
  return (
    <div
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle?.(style);
      }}
    >
      <IconButton
        // iconSize={size}
        // isSelected={active}
        typeIcon={typeIcon as IconType}
      />
    </div>
  );
};
