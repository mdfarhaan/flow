import { useRef, useState } from "react";
import { Card, Button, FileInfo } from "../helper";
import { MdAddCircleOutline } from "react-icons/md";
import styles from "./Upload.module.css";
import fileImg from "../../Assets/file.png";
import uploadContent from "../../Assets/uploadContent.png";
import rocket from "../../Assets/rocket.json";
import Lottie from "react-lottie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Uploaded from "./Uploaded";
import { uploadFile } from "../../services/APIservices";

function SelectFile() {
  interface APIresponse {
    code: string;
    success: boolean;
  }

  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [file, setFile] = useState<any>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [response, setResponse] = useState<APIresponse>();

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uploadFineRef = useRef<HTMLInputElement | null>(null);

  const SelectFileHandler = () => {
    if (uploadFineRef.current !== null) {
      uploadFineRef.current.click();
    }
  };

  const onSelect = (e: any) => {
    setFile(e.target.files[0]);
    setFileSelected(true);
  };

  const onUploadHandler = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      setIsUploading(true);
      const res = await uploadFile(formData);

      if (res.success) {
        setResponse(res);
        setIsUploading(false);
      } else {
        toast.error(res.message);
        setIsUploading(false);
      }
    } else {
      toast.error("Select a file to upload", { autoClose: 3000 });
    }
  };

  const getFileSize = (size: number) => {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (size === 0) return "0 Byte";
    var i = Math.floor(Math.log(size) / Math.log(1024));
    return Math.round(size / Math.pow(1024, i)) + " " + sizes[i];
  };

  return (
    <div>
      <ToastContainer />
      {!response ? (
        <Card>
          <>
            {!isUploading ? (
              fileSelected ? (
                <>
                  <img
                    src={uploadContent}
                    alt="uploadContent"
                    height="150"
                    style={{ marginTop: 10, marginBottom: 10 }}
                  />
                  <FileInfo
                    name={file.name}
                    type={file.type}
                    size={getFileSize(file.size)}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    id="file"
                    onChange={onSelect}
                    ref={uploadFineRef}
                    style={{ display: "none" }}
                  />

                  <div
                    className={styles.selectHeader}
                    onClick={SelectFileHandler}
                  >
                    <MdAddCircleOutline size={55} style={{ marginTop: 1 }} />
                    <div>
                      <h2 style={{ fontSize: 35 }}>Select File</h2>
                      {/* <p>
                        or <strong>Drag</strong> and <strong>Drop</strong>
                      </p> */}
                    </div>
                  </div>
                  <img
                    src={fileImg}
                    alt="file"
                    height="220"
                    style={{ marginTop: 10, marginBottom: 10 }}
                  />
                </>
              )
            ) : (
              <>
                <h1>Uploading...</h1>
                <div>
                  <Lottie
                    options={lottieOptions}
                    height={400}
                    width={200}
                    style={{ transform: "translateY(-50px)" }}
                  />
                </div>
              </>
            )}
            {!isUploading && (
              <Button onClick={onUploadHandler}>
                {fileSelected ? "Get a Link" : "Upload"}
              </Button>
            )}
          </>
        </Card>
      ) : (
        <Uploaded code={response.code} success={response.success} />
      )}
    </div>
  );
}

export default SelectFile;
