import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

export const SuccessIconComponent: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.7241 9.18966C18.105 8.78972 18.0896 8.15675 17.6897 7.77586C17.2897 7.39498 16.6567 7.41041 16.2759 7.81034L17.7241 9.18966ZM10.3333 15.5L9.6092 16.1897C9.79794 16.3878 10.0597 16.5 10.3333 16.5C10.607 16.5 10.8687 16.3878 11.0575 16.1897L10.3333 15.5ZM7.72414 11.3103C7.34325 10.9104 6.71028 10.895 6.31034 11.2759C5.91041 11.6567 5.89498 12.2897 6.27586 12.6897L7.72414 11.3103ZM16.2759 7.81034L9.6092 14.8103L11.0575 16.1897L17.7241 9.18966L16.2759 7.81034ZM11.0575 14.8103L7.72414 11.3103L6.27586 12.6897L9.6092 16.1897L11.0575 14.8103Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SuccessIcon = memo(SuccessIconComponent);
