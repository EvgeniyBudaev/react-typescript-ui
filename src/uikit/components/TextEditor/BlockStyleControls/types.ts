import type { EditorState } from "draft-js";

export type TBlockStyleControlsProps = {
  editorState: EditorState;
  onToggle: (value: string) => void;
};
