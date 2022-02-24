import { useState } from "react";
import { Card, Button, Failed } from "../helper";
import styles from "./Download.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import downloaded from "../../Assets/downloaded.png";
import Downloaded from "./Downloaded";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFile } from "../../services/APIservices";
import { codeSchema } from "../../services/schema";

function DownloadFile() {
  const [codeInput, setCodeInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [fileData, setFileData] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);

  const searchFileHandler = async () => {
    try {
      const data = await codeSchema.validate(codeInput);
      setInputError(false);
      const res = await getFile(data);
      if (res.success) {
        setFileData(res.data);
        toast.success("File Downloaded Successfully", { autoClose: 2000 });
      } else {
        toast.error("Invalid Code! Try again", { autoClose: 3000 });
        setInvalidCode(true);
      }
    } catch (err: any) {
      setInputError(err.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      {!fileData ? (
        <Card>
          <>
            <div style={{ lineHeight: 0, maxHeight: "23%", zIndex: 10 }}>
              <p className={styles.label}>Enter your Code</p>
              <div
                className={styles.inputBox}
                style={{
                  border: inputError ? "2px solid #FF9494" : "1px solid #000",
                }}
              >
                <input
                  placeholder="Search"
                  onChange={(e) => setCodeInput(e.target.value)}
                />
                <BiSearchAlt2 size={23} />
              </div>
              <p className={styles.errLabel}>{inputError}</p>
            </div>
            {invalidCode ? (
              <Failed error={"Invalid Code!"} />
            ) : (
              <img
                src={downloaded}
                alt="downloaded"
                className={styles.downloadImg}
              />
            )}
            <Button onClick={searchFileHandler}>Search</Button>
          </>
        </Card>
      ) : (
        <Downloaded data={fileData} />
      )}
    </div>
  );
}

export default DownloadFile;
