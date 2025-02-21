import type { EditorState } from "draft-js";

export type TInlineStyleControlsProps = {
  editorState: EditorState;
  onToggle: (value: string) => void;
};
