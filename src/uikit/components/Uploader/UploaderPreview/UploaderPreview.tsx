import { type FC, memo } from "react";
import isNil from "lodash/isNil";

type TProps = {
  files?: File[];
};

const UploaderPreviewComponent: FC<TProps> = ({ files }) => {
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
