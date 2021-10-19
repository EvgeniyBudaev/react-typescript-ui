import React from "react";
import classNames from "classnames";
import { Button, Icon, IconType } from "ui-kit";
import { IButtonProps } from "../Button";
import "./IconButton.scss";

export interface IIconButtonProps extends IButtonProps {
  className?: string;
  type: IconType;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  className,
  type,
  isDisabled = false,
  onClick,
  ...rest
}) => {
  return (
    <Button
      className={classNames("IconButton", className)}
      isDisabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      <Icon type={type} />
    </Button>
  );
};
