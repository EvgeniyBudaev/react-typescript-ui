import { TEXT_EDITOR_INLINE_STYLES } from "../constants";
import { FormatButton } from "../FormatButton";

export const InlineStyleControls = ({ editorState, onToggle }: any) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <>
      {TEXT_EDITOR_INLINE_STYLES.map((type) => (
        <FormatButton
          key={type.label}
          active={currentStyle.has(type.style)}
          onToggle={onToggle}
          style={type.style}
          icon={type.icon}
          size={type.size}
        />
      ))}
    </>
  );
};
