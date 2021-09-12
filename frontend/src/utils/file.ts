export const formatBytes = (a: number, b: number) => {
  if (a === 0) return "0 Bytes";
  if (!a) return "0";

  const c = 1024;
  const d = b || 2;
  const e = ["Bytes", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];
  const f = Math.floor(Math.log(a) / Math.log(c));

  return `${parseFloat((a / Math.pow(c, f)).toFixed(d))} ${e[f]}`;
};

export const getFileDataAsBase64String = (file: File): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
      const encoded = btoa(reader.result as string);
      resolve(encoded);
    };
    reader.onerror = error => reject(error);
  });
