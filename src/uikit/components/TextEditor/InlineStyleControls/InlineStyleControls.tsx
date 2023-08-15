import type { EditorState } from "draft-js";
import type { FC } from "react";
import { TEXT_EDITOR_INLINE_STYLES } from "../constants";
import { FormatButton } from "../FormatButton";

type TProps = {
  editorState: EditorState;
  onToggle: (value: string) => void;
};

export const InlineStyleControls: FC<TProps> = ({ editorState, onToggle }) => {
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
