import type { EditorState } from "draft-js";
import type { FC } from "react";
import { TEXT_EDITOR_BLOCK_TYPES } from "../constants";
import { FormatButton } from "../FormatButton";

type TProps = {
  editorState: EditorState;
  onToggle: (blockType: any) => void;
};

export const BlockStyleControls: FC<TProps> = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <>
      {TEXT_EDITOR_BLOCK_TYPES.map((type) => (
        <FormatButton
          key={type.label}
          active={type.style === blockType}
          onToggle={onToggle}
          style={type.style}
          icon={type.icon}
          size={type.size}
        />
      ))}
    </>
  );
};
