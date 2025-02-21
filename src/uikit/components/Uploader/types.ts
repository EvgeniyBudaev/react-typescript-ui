import type { Accept } from "react-dropzone";

export type TUploaderConfig = {
  accept: Accept;
};

export type TUploaderProps = {
  config?: TUploaderConfig;
  onFilesUploadedAll?: (handleFilesAllAdd: File[]) => void;
};
