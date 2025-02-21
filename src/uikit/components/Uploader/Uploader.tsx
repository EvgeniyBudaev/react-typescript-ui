import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import { useState, useEffect, memo, type FC } from "react";

import type { TUploaderConfig, TUploaderProps } from "./types";
import { UploaderDropzone } from "./UploaderDropzone";

const UploaderComponent: FC<TUploaderProps> = ({ config, onFilesUploadedAll }) => {
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

UploaderComponent.displayName = "Uploader";

export const Uploader = memo(UploaderComponent);
