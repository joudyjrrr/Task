export const convertFileToBase64Format = (file: File) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
  });
};

export const convertBase64FormatToFile = (base64Format: string) => {
  // extract content type and base64 payload from original string
  //   base64Format, fileName
  //   const base64Format =
  //     typeof value === "string" ? JSON.parse(value)?.base64 : value.base64;

  const pos = base64Format.indexOf(";base64,");
  const type = base64Format.substring(5, pos);
  const b64 = base64Format.substring(pos + 8);

  // decode base64
  const imageContent = atob(b64);

  // create an ArrayBuffer and a view (as unsigned 8-bit)
  const buffer = new ArrayBuffer(imageContent.length);
  const view = new Uint8Array(buffer);

  // fill the view, using the decoded base64
  for (let n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  // convert ArrayBuffer to Blob
  const blob = new Blob([buffer], { type: type });
  const file = new File([blob], "photo" + base64Format.slice(10, 20));

  return file;
};
