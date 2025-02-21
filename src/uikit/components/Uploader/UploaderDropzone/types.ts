import type { TUploaderConfig } from "../types";

export type TUploaderDropzoneProps = {
  config: TUploaderConfig;
  onDrop: (acceptedFiles: any) => void;
};
