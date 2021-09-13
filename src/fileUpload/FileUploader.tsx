import { FormText } from "reactstrap";

const FileUploader = (props: { onFileSelect: Function; setFileUploadErrors: Function }) => {
  const MAX_FILE_SIZE = 1048576;
  const getSizeInMB = (value: number) => {
    return value / 1024 / 1024;
  };
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    props.setFileUploadErrors([]);
    const file = (e?.target.files as FileList)[0];
    let errors = [];
    if (!file?.type.match(/.(jpg|jpeg|png)$/i)) {
      errors.push("Please upload an image file");
    }
    if (file?.size > MAX_FILE_SIZE) {
      errors.push(`File size cannot exceed more than ${getSizeInMB(MAX_FILE_SIZE)}MB`);
    }
    if (file?.size <= 0) {
      errors.push(`Invalid file`);
    }
    if (errors.length > 0) {
      props.setFileUploadErrors(errors);
    }
    props.onFileSelect(file);
  };

  return (
    <>
      <input type="file" onChange={handleFileInput} name="uploadCat" accept={"image/jpeg, image/jpg,image.png"} />
      <FormText color="muted">Only png, jpg, jpg files allowed</FormText>
    </>
  );
};

export default FileUploader;
