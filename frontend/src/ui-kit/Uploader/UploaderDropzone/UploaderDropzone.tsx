import React from "react";
import Dropzone from "react-dropzone";
import { Button } from "ui-kit";
import { IUploaderConfig } from "../types";
import "./UploaderDropzone.scss";

export interface IUploaderDropzoneProps {
  config: IUploaderConfig;
  onDrop: (acceptedFiles: any) => void;
}

export const UploaderDropzone: React.FC<IUploaderDropzoneProps> = ({
  config,
  onDrop,
}) => {
  return (
    <Dropzone accept={config.accept.join(", ")} onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
        let className = "";
        className = isDragActive ? "active" : className;
        className = isDragReject ? "reject" : className;

        return (
          <div className={`UploaderDropzone ${className}`} {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="UploaderDropzone-Title">
              <div>Drag and Drop files here,</div>
              <div>or Click</div>
            </div>
            <Button>Upload Here</Button>
          </div>
        );
      }}
    </Dropzone>
  );
};
