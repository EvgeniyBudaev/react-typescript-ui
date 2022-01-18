import React, { useState } from "react";
import axios from "axios";
import { downloadFile } from "api/fileService";
import { buildGetFileUrl } from "api/file";
import { getFileDataAsBase64String } from "utils/file";
import { Uploader, UploaderPreview } from "ui-kit";
import { IUploaderConfig } from "ui-kit/Uploader/types";
import "./UploaderPage.scss";

export interface INewFile {
  name: string;
  file: File;
  encodedData: string;
}

export const UploaderPage: React.FC = () => {
  const UPLOADER_CONFIG: IUploaderConfig = {
    accept: ["image/jpg", "image/jpeg", "image/png", "application/pdf"],
  };
  const [filesUploaded, setFilesUploaded] = useState<File[]>([]);
  const [filesNew, setFilesNew] = useState<INewFile[]>([]);

  const handleFilesUploadedAll = (files: any) => {
    console.log("Uploaded files", files);
    setFilesUploaded(files);
  };

  const handleFilesAdd = async (filesToAdd: File[]) => {
    console.log("filesToAdd", filesToAdd);
    const newFiles: INewFile[] = [];

    for await (const file of filesToAdd) {
      newFiles.push({
        name: file.name,
        file: file,
        encodedData: await getFileDataAsBase64String(file),
      });
    }

    setFilesNew(newFiles);
  };

  const handleSubmit = () => {
    handleFilesAdd(filesUploaded);
    filesNew.forEach(file => {
      console.log("file:", file);
      const formData = new FormData();
      formData.append("name", file.name);
      formData.append("file", file.file);
      formData.append("encodedData", file.encodedData);

      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/api/v1/files/",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(data => {
          console.log("[data]", data);
        })
        .catch(err => console.log("[error]", err));
    });
  };

  const FILE_ID = 1;

  const handleLoad = async () => {
    const response = await axios(
      `http://127.0.0.1:8000/api/v1/download/${FILE_ID}/`,
      { responseType: "blob" }
    );
    console.log("Response: ", response);

    // const url = window.URL.createObjectURL(
    //   new Blob([response.data], {
    //     type: response.headers["content-type"]
    //   })
    // );
    // console.log("URL: " ,url);
    //
    // const link = document.createElement("a");
    // link.href = url;
    // const filename = "test";
    // link.setAttribute("download", filename);
    // document.body.appendChild(link);
    // link.click();
  };

  const handleFileDownload = (event: React.MouseEvent) => {
    downloadFile(buildGetFileUrl(FILE_ID.toString()));
    event.stopPropagation();
  };

  const handleDownload = () => {
    fetch(`http://127.0.0.1:8000/api/v1/download/${FILE_ID}/`).then(
      response => {
        console.log("[response]", response);
        //   response.blob().then(blob => {
        //   let url = window.URL.createObjectURL(blob);
        //   let a = document.createElement("a");
        //   console.log(url);
        //   a.href = url;
        //   a.download = "test";
        //   a.click();
        // });
      }
    );
  };

  //   const res = key.replace(/\.[^/.]+$/, "");

  return (
    <section className="UploaderPage">
      <h2>Uploader</h2>
      <Uploader
        config={UPLOADER_CONFIG}
        onFilesUploadedAll={handleFilesUploadedAll}
      />
      <UploaderPreview files={filesUploaded} />

      <button onClick={handleSubmit}>submit</button>
      <button onClick={handleFileDownload}>Загрузить файл222</button>
      <button onClick={handleDownload}>Загрузить файл333</button>
      <button onClick={handleLoad}>Загрузить файл111</button>
    </section>
  );
};
