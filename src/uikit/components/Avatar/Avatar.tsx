import clsx from "clsx";
import { memo, type FC } from "react";

import type { TAvatarProps } from "./types";
import "./Avatar.scss";

const AvatarComponent: FC<TAvatarProps> = ({
  className,
  classNameSmallCircle,
  dataTestId = "uikit__avatar",
  image,
  onClick,
  size = 46,
  title,
}) => {
  const sizeBox = `${size - 4}px`;
  const sizeInner = `${size - 8}px`;
  const sizeTitle = `${size / 2}px`;
  const sizeWrapper = `${size}px`;

  return (
    <div
      className={clsx("Avatar", className)}
      data-testid={dataTestId}
      onClick={onClick}
      style={{ width: sizeInner, height: sizeInner }}
    >
      <div
        className={clsx("AvatarInner", classNameSmallCircle)}
        style={{
          width: sizeInner,
          height: sizeInner,
        }}
      >
        {image && (
          <img
            alt=""
            className="AvatarFace"
            data-testid="test-avatarFace_image"
            height={sizeInner}
            src={image}
            width={sizeInner}
          />
        )}
        {title && (
          <div
            className="AvatarFace"
            data-testid="test-avatarFace_title"
            style={{ fontSize: sizeTitle }}
          >
            {title}
          </div>
        )}
      </div>
      <div className="AvatarBorder" style={{ width: sizeWrapper, height: sizeWrapper }}>
        <div className="AvatarBorderBox" style={{ width: sizeBox, height: sizeBox }} />
      </div>
    </div>
  );
};

AvatarComponent.displayName = "Avatar";

export const Avatar = memo(AvatarComponent);
