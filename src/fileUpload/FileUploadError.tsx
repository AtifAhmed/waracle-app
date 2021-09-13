import React from "react";
import { Alert } from "reactstrap";

const FileUploadError = (props: { fileUploadErrors: string[] }) => {
  return (
    <>
      {props.fileUploadErrors.length > 0 && (
        <Alert className="mt-3" color="danger">
          {props.fileUploadErrors.map((error: string) => {
            return <div>{error}</div>;
          })}
        </Alert>
      )}
    </>
  );
};

export default FileUploadError;
