import { memo } from "react";
import type { FC, MouseEvent } from "react";
import clsx from "clsx";
import "./Avatar.scss";

type TProps = {
  className?: string;
  classNameSmallCircle?: string;
  image?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  size?: number;
  title?: string;
};

const AvatarComponent: FC<TProps> = ({
  className,
  classNameSmallCircle,
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
      style={{ width: sizeInner, height: sizeInner }}
      onClick={onClick}
      data-testid="test-avatar"
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
      <div className="AvatarBorder" style={{ width: sizeWrapper, height: sizeWrapper }}>
        <div className="AvatarBorderBox" style={{ width: sizeBox, height: sizeBox }} />
      </div>
    </div>
  );
};

export const Avatar = memo(AvatarComponent);
