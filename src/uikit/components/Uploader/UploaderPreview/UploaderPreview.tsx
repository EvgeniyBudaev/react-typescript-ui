import isNil from "lodash/isNil";
import { type FC, memo } from "react";

import type { TUploaderPreviewProps } from "./types";

const UploaderPreviewComponent: FC<TUploaderPreviewProps> = ({ files }) => {
  return (
    <div className="UploaderPreview">
      {files && !isNil(files)
        ? files.map((file, index) => <p key={index}>{file.name}</p>)
        : "Файлов нет."}
    </div>
  );
};

UploaderPreviewComponent.displayName = "UploaderPreview";

export const UploaderPreview = memo(UploaderPreviewComponent);
