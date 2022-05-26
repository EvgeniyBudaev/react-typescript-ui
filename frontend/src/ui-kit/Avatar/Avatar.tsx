import React, { memo } from "react";
import classNames from "classnames";
import "./Avatar.scss";

export interface IAvatarProps {
  className?: string;
  classNameSmallCircle?: string;
  image?: string;
  size?: number;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const AvatarComponent: React.FC<IAvatarProps> = ({
  className,
  classNameSmallCircle,
  image,
  size = 46,
  title,
  onClick,
}) => {
  const sizeBox = `${size - 4}px`;
  const sizeInner = `${size - 8}px`;
  const sizeTitle = `${size / 2}px`;
  const sizeWrapper = `${size}px`;

  return (
    <div
      className={classNames("Avatar", className)}
      style={{ width: sizeInner, height: sizeInner }}
      onClick={onClick}
      data-testid="test-avatar"
    >
      <div
        className={classNames("AvatarInner", classNameSmallCircle)}
        style={{
          width: sizeInner,
          height: sizeInner,
        }}
      >
        {image && (
          <img
            className="AvatarFace"
            src={image}
            alt=""
            width={sizeInner}
            height={sizeInner}
            data-testid="test-avatarFace_image"
          />
        )}
        {title && (
          <div
            className="AvatarFace"
            style={{ fontSize: sizeTitle }}
            data-testid="test-avatarFace_title"
          >
            {title}
          </div>
        )}
      </div>
      <div
        className="AvatarBorder"
        style={{ width: sizeWrapper, height: sizeWrapper }}
      >
        <div
          className="AvatarBorderBox"
          style={{ width: sizeBox, height: sizeBox }}
        />
      </div>
    </div>
  );
};

export const Avatar = memo(AvatarComponent);
