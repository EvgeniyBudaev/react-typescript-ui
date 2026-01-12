import { memo } from "react";

import { TEXT_EDITOR_BLOCK_TYPES } from "../constants";
import { FormatButton } from "../FormatButton";
import type { TBlockStyleControlsProps } from "./types";

const BlockStyleControlsComponent: FC<TBlockStyleControlsProps> = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType("");

  return (
    <>
      {TEXT_EDITOR_BLOCK_TYPES.map((type) => (
        <FormatButton
          key={type.label}
          isActive={type.style === blockType}
          onToggle={onToggle}
          size={type.size}
          style={type.style}
          typeIcon={type.icon}
        />
      ))}
    </>
  );
};

BlockStyleControlsComponent.displayName = "BlockStyleControls";

export const BlockStyleControls = memo(BlockStyleControlsComponent);
