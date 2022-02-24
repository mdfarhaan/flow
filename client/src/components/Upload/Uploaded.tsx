import { Card, Button, Failed } from "../helper";
import styles from "./Upload.module.css";
import successImg from "../../Assets/success.png";
import { ToastContainer, toast } from "react-toastify";

interface UploadedProps {
  code: string;
  success: boolean;
}

function Uploaded({ code, success }: UploadedProps) {
  const copyFileLink = () => {
    navigator.clipboard.writeText("baseUrl" + code);
    toast.success("Copied to Clipboard", { autoClose: 3000 });
  };
  return (
    <div>
      <ToastContainer />
      <Card>
        <>
          {success ? (
            <>
              <div className={styles.successHeader}>
                <img
                  src={successImg}
                  alt="success"
                  className={styles.successImg}
                />
                <p>File Uploaded Successfully</p>
              </div>
              <TextSection code={code} />
            </>
          ) : (
            <Failed error={"Upload Failed! Try again"} />
          )}
          <Button onClick={copyFileLink}>Copy Link</Button>
        </>
      </Card>
    </div>
  );
}

interface TextSectionProps {
  code: string;
}

const TextSection = ({ code }: TextSectionProps) => {
  return (
    <div>
      <div style={{ lineHeight: 0 }}>
        <p className={styles.label}>File Code</p>
        <div className={styles.textBox}>{<p>{code}</p>}</div>
      </div>
      <div style={{ lineHeight: 0 }}>
        <p className={styles.label}>File Link</p>
        <div className={styles.textBox}>{<p>{`www.weflow.ml/${code}`}</p>}</div>
      </div>
    </div>
  );
};

export default Uploaded;
