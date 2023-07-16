import React from "react";
import type { FC } from "react";
import Dropzone from "react-dropzone";
import { Button } from "uikit";
import type { TUploaderConfig } from "../types";
import "./UploaderDropzone.scss";

type TProps = {
  config: TUploaderConfig;
  onDrop: (acceptedFiles: any) => void;
};

export const UploaderDropzone: FC<TProps> = ({ config, onDrop }) => {
  return (
    <Dropzone accept={config.accept} onDrop={onDrop}>
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
