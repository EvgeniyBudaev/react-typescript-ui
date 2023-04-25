import { memo } from "react";
import type { FC } from "react";
import ReactStars from "react-rating-stars-component";

type TProps = {
  activeColor?: string;
  count?: number;
  onChange?: (newRating: number) => void;
  size?: number;
};

const Component: FC<TProps> = ({ activeColor, count, onChange, size }) => {
  return <ReactStars activeColor={activeColor} count={count} onChange={onChange} size={size} />;
};

export const Rating = memo(Component);
