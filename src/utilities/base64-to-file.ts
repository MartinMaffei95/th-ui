export const base64ToFile = (base64: string) => {
  let decoded = fetch(base64)
    .then((res) => res.blob())
    .then((blob) => {
      return blob;
    });
  return decoded;
};
