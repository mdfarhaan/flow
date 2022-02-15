import styles from "./FileInfo.module.css";
import {
  AiOutlineFileGif,
  AiOutlineFileImage,
  AiOutlineFileJpg,
  AiOutlineFile,
} from "react-icons/ai";

interface FileInfoProps {
  name: string;
  type: string;
  size: string;
}

const FileInfo = ({ name, type, size }: FileInfoProps) => {
  let imgComp;
  let fileType;

  switch (type) {
    case "image/png": {
      imgComp = <AiOutlineFileImage size={52} style={{ marginTop: 12 }} />;
      fileType = "png";
      break;
    }
    case "image/gif": {
      imgComp = <AiOutlineFileGif size={52} style={{ marginTop: 12 }} />;
      fileType = "gif";
      break;
    }
    case "image/jpeg": {
      imgComp = <AiOutlineFileJpg size={52} style={{ marginTop: 12 }} />;
      fileType = "jpeg";
      break;
    }
    default: {
      imgComp = <AiOutlineFile size={52} style={{ marginTop: 12 }} />;
      fileType = size;
      break;
    }
  }
  return (
    <div className={styles.info}>
      {imgComp}
      <div>
        <h2>{name}</h2>
        <p>{`${size} ${fileType}`}</p>
      </div>
    </div>
  );
};

export default FileInfo;
