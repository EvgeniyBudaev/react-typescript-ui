import { useState, useEffect } from "react";
import type { FC } from "react";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import { UploaderDropzone } from "./UploaderDropzone";
import type { TUploaderConfig } from "./types";

interface IUploaderProps {
  config?: TUploaderConfig;
  onFilesUploadedAll?: (handleFilesAllAdd: File[]) => void;
}

export const Uploader: FC<IUploaderProps> = ({ config, onFilesUploadedAll }) => {
  const UPLOADER_CONFIG_DEFAULT: TUploaderConfig = {
    accept: {},
  };
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    if (!isEmpty(files)) {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles);
    } else {
      const newFiles = [...acceptedFiles];
      setFiles(newFiles);
    }
  };

  const handleFilesAllAdd = (files: File[]) => {
    return files;
  };

  useEffect(() => {
    onFilesUploadedAll && onFilesUploadedAll(handleFilesAllAdd(files));
  }, [files]);

  return (
    <div className="Uploader">
      {config && !isNil(config) ? (
        <UploaderDropzone config={config} onDrop={handleDrop} />
      ) : (
        <UploaderDropzone config={UPLOADER_CONFIG_DEFAULT} onDrop={handleDrop} />
      )}
    </div>
  );
};
