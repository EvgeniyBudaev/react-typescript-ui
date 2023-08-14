import { IconButton } from "../../Button";

export const FormatButton = ({ onToggle, active, style, icon, size }: any): JSX.Element => {
  console.log("icon: ", icon);
  return (
    <div
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle(style);
      }}
    >
      <IconButton
        // iconSize={size}
        // isSelected={active}
        typeIcon={icon}
      />
    </div>
  );
};
