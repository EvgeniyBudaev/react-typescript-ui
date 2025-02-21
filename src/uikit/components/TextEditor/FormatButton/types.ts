import type { IconType } from "../../Icon/IconType";

export type TFormatButtonProps = {
  isActive?: boolean;
  onToggle: (style: string) => void;
  size?: string;
  style: string;
  typeIcon: IconType | string;
};
