import React, { useState, useEffect } from "react";
import { isEmpty, isNil } from "lodash";
import { UploaderDropzone } from "./UploaderDropzone/UploaderDropzone";
import { IUploaderConfig } from "./types";

interface IUploaderProps {
  config?: IUploaderConfig;
  onFilesUploadedAll?: (handleFilesAllAdd: File[]) => void;
}

export const Uploader: React.FC<IUploaderProps> = ({ config, onFilesUploadedAll }) => {
  const UPLOADER_CONFIG_DEFAULT: IUploaderConfig = {
    accept: [],
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
  }

  useEffect(() => {
    onFilesUploadedAll && onFilesUploadedAll(handleFilesAllAdd(files));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  return (
    <div className="Uploader">
      {
        !isNil(config) ? <UploaderDropzone config={config} onDrop={handleDrop} />
          : <UploaderDropzone config={UPLOADER_CONFIG_DEFAULT} onDrop={handleDrop} />
      }
    </div>
  );
};
