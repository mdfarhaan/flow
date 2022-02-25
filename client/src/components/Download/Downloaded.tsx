import { Card, Button, FileInfo } from "../helper";
import downloadedContent from "../../Assets/downloadedContent.png";
import { getFileSize } from "../../services/utils";
import styles from "./Download.module.css";
const fileSaver = require("file-saver");
const { saveAs } = fileSaver;

const Downloaded = ({ data }: any) => {
  const downloadFile = () => {
    saveAs(data.location, data.fileName);
  };

  return (
    <Card>
      <>
        <img
          src={downloadedContent}
          alt="downloadedContent"
          className={styles.downloadedImg}
        />
        <FileInfo
          name={data.fileName}
          type={data.type}
          size={getFileSize(data.size)}
        />
        <Button onClick={downloadFile}>Save</Button>
      </>
    </Card>
  );
};

export default Downloaded;
