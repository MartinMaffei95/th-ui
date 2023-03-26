export const convertToBase64 = async (
  file: any
): Promise<ArrayBuffer | void> => {
  if (!file) return;
  return new Promise((resolve: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };
  });
};
