import type { CSSProperties } from "react";

import "./Hr.scss";

type TProps = {
  style?: CSSProperties;
};

export const Hr: FC<TProps> = ({ style }) => {
  return (
    <div className="Hr" style={style}>
      <hr />
    </div>
  );
};
