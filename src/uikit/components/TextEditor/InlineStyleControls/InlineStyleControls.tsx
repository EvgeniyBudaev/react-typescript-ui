import { type FC, memo } from "react";

import { TEXT_EDITOR_INLINE_STYLES } from "../constants";
import { FormatButton } from "../FormatButton";
import type { TInlineStyleControlsProps } from "./types";

const InlineStyleControlsComponent: FC<TInlineStyleControlsProps> = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <>
      {TEXT_EDITOR_INLINE_STYLES.map((type) => (
        <FormatButton
          key={type.label}
          isActive={currentStyle.has(type.style)}
          onToggle={onToggle}
          size={type.size}
          style={type.style}
          typeIcon={type.icon}
        />
      ))}
    </>
  );
};

InlineStyleControlsComponent.displayName = "InlineStyleControls";

export const InlineStyleControls = memo(InlineStyleControlsComponent);
