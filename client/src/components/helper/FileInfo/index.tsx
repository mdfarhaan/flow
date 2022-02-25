import {
  AiOutlineFileGif,
  AiOutlineFileImage,
  AiOutlineFileJpg,
  AiOutlineFile,
  AiOutlineFilePdf,
} from "react-icons/ai";
import styles from "./FileInfo.module.css";
import { useMediaQuery } from "react-responsive";

interface FileInfoProps {
  name: string;
  type: string;
  size: string;
}

const FileInfo = ({ name, type, size }: FileInfoProps) => {
  const md = useMediaQuery({ query: "(max-width: 1000px)" });
  console.log(type);
  let imgComp;
  let fileType;

  switch (type) {
    case "image/png": {
      imgComp = <AiOutlineFileImage size={52} />;
      fileType = "png";
      break;
    }
    case "image/gif": {
      imgComp = <AiOutlineFileGif size={52} />;
      fileType = "gif";
      break;
    }
    case "image/jpeg": {
      imgComp = <AiOutlineFileJpg size={52} />;
      fileType = "jpeg";
      break;
    }
    case "application/pdf": {
      imgComp = <AiOutlineFilePdf size={52} />;
      fileType = "pdf";
      break;
    }
    default: {
      imgComp = <AiOutlineFile size={52} />;
      fileType = name.split(".")[1];
      break;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{imgComp}</div>
      <div>
        <h2 className={styles.heading}>{name.split(".")[0]}</h2>
        <p className={styles.label}>{`${size} ${fileType}`}</p>
      </div>
    </div>
  );
};

export default FileInfo;
