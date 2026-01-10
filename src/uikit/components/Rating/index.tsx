import { memo, type FC } from "react";
import ReactStars from "react-rating-stars-component";

import type { TRatingProps } from "./types";

const RatingComponent: FC<TRatingProps> = ({
  activeColor,
  count,
  dataTestId = "uikit__rating",
  onChange,
  size,
}) => {
  return (
    <ReactStars
      activeColor={activeColor}
      count={count}
      data-testid={dataTestId}
      onChange={onChange}
      size={size}
    />
  );
};

RatingComponent.displayName = "Rating";

export const Rating = memo(RatingComponent);
