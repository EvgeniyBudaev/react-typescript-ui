import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const Component: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 -960 960 960"
    width={width}
    fill="currentColor"
    {...props}
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h160v80H200Zm560 0H600v-80h160v-160h80v160q0 33-23.5 56.5T760-120ZM120-760q0-33 23.5-56.5T200-840h160v80H200v160h-80v-160Zm720 0v160h-80v-160H600v-80h160q33 0 56.5 23.5T840-760ZM480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm-36-153h73q0-34 8-52t35-45q35-35 46.5-56.5T618-598q0-54-39-88t-99-34q-50 0-86 26t-52 74l66 27q7-26 26.5-42.5T480-652q29 0 46.5 15.5T544-595q0 20-9.5 37.5T502-521q-33 29-45.5 56T444-393Z" />
  </svg>
);

export const IndeterminateQuestionBoxIcon = memo(Component);
