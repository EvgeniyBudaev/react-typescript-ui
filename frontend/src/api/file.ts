const baseUrl = "http://127.0.0.1:8000/api/v1";

export const buildGetFileUrl = (fileId: string): string =>
  `${baseUrl}/download/${fileId}/`;
