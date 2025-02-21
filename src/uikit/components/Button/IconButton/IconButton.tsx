import clsx from "clsx";
import { memo, type FC } from "react";

import { Button, Icon } from "uikit";

import type { IIconButtonProps } from "./types";
import "./IconButton.scss";

const IconButtonComponent: FC<IIconButtonProps> = ({
  className,
  isActive = false,
  isDisabled = false,
  onClick,
  typeIcon,
  ...rest
}) => {
  return (
    <Button
      className={clsx("IconButton", className)}
      data-testid="test-icon-button"
      isActive={isActive}
      isDisabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      <Icon type={typeIcon} />
    </Button>
  );
};

IconButtonComponent.displayName = "IconButton";

export const IconButton = memo(IconButtonComponent);
