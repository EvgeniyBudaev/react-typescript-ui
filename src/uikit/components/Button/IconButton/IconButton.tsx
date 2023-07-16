import { memo } from "react";
import type { FC, MouseEvent } from "react";
import clsx from "clsx";
import { Button, Icon } from "uikit";
import type { IconType } from "uikit";
import type { IButtonProps } from "../Button";
import "./IconButton.scss";

export interface IIconButtonProps extends IButtonProps {
  className?: string;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  typeIcon: IconType;
}

const Component: FC<IIconButtonProps> = ({
  className,
  isDisabled = false,
  onClick,
  typeIcon,
  ...rest
}) => {
  return (
    <Button
      className={clsx("IconButton", className)}
      data-testid="test-icon-button"
      isDisabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      <Icon type={typeIcon} />
    </Button>
  );
};

export const IconButton = memo(Component);
