import type * as React from "react";

declare global {
  /** Common */
  type Nullable<T> = T | null;
  type Nullish<T> = T | null | undefined;
  type Optional<T> = T | undefined;

  type BaseFCProps = {
    className?: string;
  };

  /** React */
  type FC<T = object> = React.FC<T & BaseFCProps>;
  type FCC<T = object> = React.FC<React.PropsWithChildren<T & BaseFCProps>>;
}

export {};
