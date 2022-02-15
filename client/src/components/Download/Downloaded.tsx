import { Card, Button, FileInfo } from "../helper";
import downloadedContent from "../../Assets/downloadedContent.png";
import { getFileSize } from "../../services/utils";
const fileSaver = require("file-saver");
const { saveAs } = fileSaver;

const Downloaded = ({ data }: any) => {
  const downloadFile = () => {
    saveAs(data.location, data.fileName);
  };

  return (
    <div>
      <Card>
        <>
          <img
            src={downloadedContent}
            alt="downloadedContent"
            height="150"
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <FileInfo
            name={data.fileName}
            type={data.type}
            size={getFileSize(data.size)}
          />
          <Button onClick={downloadFile}>Save</Button>
        </>
      </Card>
    </div>
  );
};

export default Downloaded;
