import FileUploader from "fileUpload/FileUploader";
import { useState } from "react";
import { Form, Card, CardBody, CardHeader, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { uploadCatImage } from "state/action-creators";
import { RootState } from "state/reducers";
import TopNavBar from "../navBar/Index";
import FileUploadError from "fileUpload/FileUploadError";
import "./style.scss";

const AddCat = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [fileUploadErrors, setFileUploadErrors] = useState<string[]>([]);

  const dispatch = useDispatch();

  const isLoading = useSelector((state: RootState) => state.cats.isLoading);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile as any);
    dispatch(uploadCatImage(formData));
  };
  const isUploadButtonDisabled = (): boolean => {
    return !selectedFile || fileUploadErrors.length > 0;
  };

  return (
    <>
      <TopNavBar />
      <Card className="m-auto upload-cat">
        <CardHeader>
          <h3 className="title">Upload a cat</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <div className="d-flex flex-column">
              <FileUploader onFileSelect={setSelectedFile} setFileUploadErrors={setFileUploadErrors} />

              {isLoading ? (
                <Spinner size={"md"} className=" spinner" />
              ) : (
                <button type="submit" disabled={isUploadButtonDisabled()} className={"mt-4 btn btn-primary " + (isUploadButtonDisabled() ? "not-allowed" : "")}>
                  Upload
                </button>
              )}
              {fileUploadErrors.length > 0 && <FileUploadError fileUploadErrors={fileUploadErrors} />}
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddCat;
