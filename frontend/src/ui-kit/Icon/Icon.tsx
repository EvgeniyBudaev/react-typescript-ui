import React, { DOMAttributes } from "react";
import classNames from "classnames";
import "./Icon.scss";
import { IconType, iconTypes } from "./IconType";

export type IconSizeType = "small";

export interface IIconProps extends DOMAttributes<HTMLSpanElement> {
  className?: string;
  size?: IconSizeType;
  type: IconType;
}

const getIcon = (type: IconType): JSX.Element =>
  iconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({
  className,
  size,
  type,
  ...rest
}) => {
  return (
    <div
      className={classNames("Icon", className, `Icon-IconSize__${size}`)}
      {...rest}
    >
      {getIcon(type)}
    </div>
  );
};
