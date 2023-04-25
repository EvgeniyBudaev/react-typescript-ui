import type { FC } from "react";
import isNil from "lodash/isNil";

type TProps = {
  files?: File[];
};

export const UploaderPreview: FC<TProps> = ({ files }) => {
  return (
    <div className="UploaderPreview">
      {files && !isNil(files)
        ? files.map((file, index) => <p key={index}>{file.name}</p>)
        : "Файлов нет."}
    </div>
  );
};
