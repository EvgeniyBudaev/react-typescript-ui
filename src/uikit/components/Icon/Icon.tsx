import clsx from "clsx";
import { memo, useEffect, useRef, type FC } from "react";

import { EColorType, ETextColor } from "uikit";
import { formatToStringWithPx } from "uikit/utils";

import { iconTypes } from "./IconType";
import type { IIconProps } from "./types";
import "./Icon.scss";

const getIcon = (type: string) => iconTypes.get(type);

const IconComponent: FC<IIconProps> = ({
  className,
  color = ETextColor.Dark,
  dataTestId = "uikit__icon",
  height,
  width,
  size,
  type,
  ...rest
}) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const mainStyles = clsx(`${EColorType.Icon}-${color}`);

  useEffect(() => {
    if (iconRef.current) {
      if (size && !height && !width) {
        iconRef.current.style.setProperty("--icon-height", formatToStringWithPx(size));
        iconRef.current.style.setProperty("--icon-width", formatToStringWithPx(size));
      } else if (!size && height && width) {
        iconRef.current.style.setProperty("--icon-height", formatToStringWithPx(height));
        iconRef.current.style.setProperty("--icon-width", formatToStringWithPx(width));
      }
    }
  }, [height, size, width]);

  return (
    <div
      className={clsx("Icon", className, mainStyles)}
      data-testid={dataTestId}
      ref={iconRef}
      {...rest}
    >
      {getIcon(type)}
    </div>
  );
};

IconComponent.displayName = "Icon";

export const Icon = memo(IconComponent);
