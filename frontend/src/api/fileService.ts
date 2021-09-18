/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, { AxiosRequestConfig } from "axios";

export const downloadFile = (fileUrl: string): void => {
  void axios
    .get<Blob>(fileUrl, {
      responseType: "blob",
    })
    .then(response => {
      console.log("response", response);
      const filename = getFileName(response);
      console.log("filename", filename);
      // filename && createBlobFile(response.data, decodeURIComponent(filename));
      createBlobFile(response.data, decodeURIComponent("test"));
    });
};

// export const downloadFile = (fileUrl: string): void => {
//   void axios
//     .get<Blob>(fileUrl, {
//       responseType: "blob",
//     })
//     .then(response => {
//       console.log("response", response);
//       const filename = getFileName(response);
//       console.log("filename", filename);
//       // filename && createBlobFile(response.data, decodeURIComponent(filename));
//       createBlobFile(response.data, decodeURIComponent("test"));
//     });
// };

const createBlobFile = (data: Blob, filename: string): void => {
  const blob = new Blob([data]);
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const getFileName = (response: AxiosRequestConfig): string => {
  let filename = "";
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const disposition: string = response.headers["content-disposition"];

  if (disposition && disposition.indexOf("attachment") !== -1) {
    const filenameRegex = /filename[^;=\n]*\*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(disposition);
    if (matches != null && matches[1]) {
      filename = matches[1].replace(/['"]/g, "").replace("UTF-8", "");
    }
  }

  return filename;
};
