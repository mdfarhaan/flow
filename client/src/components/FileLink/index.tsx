import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Downloaded from "../Download/Downloaded";
import { ToastContainer, toast } from "react-toastify";
import { getFile } from "../../services/APIservices";
import { codeSchema } from "../../services/schema";
import Lottie from "react-lottie";
import searching from "../../Assets/searching.json";
import styles from "../Home/Home.module.css";
import { Card } from "../helper";

function FileLink() {
  const { code } = useParams();
  const [fileData, setFileData] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<string>();

  useEffect(() => {
    getFileHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFileHandler = async () => {
    try {
      const data = await codeSchema.validate(code);
      const res = await getFile(data);
      if (res.success) {
        setFileData(res.data);
        toast.success("File Downloaded Successfully", { autoClose: 2000 });
      } else {
        setIsValid("Invalid Code! Check the code");
        toast.error("Invalid Code! Check the code", { autoClose: 3000 });
        setTimeout(() => {
          window.location.href = "/download";
        }, 3000);
      }
    } catch (err: any) {
      setIsValid(err.message);
      toast.error(err.message, { autoClose: 3000 });
      // setTimeout(() => {
      //   window.location.href = "/download";
      // }, 3000);
    }
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: searching,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <ToastContainer />
      {fileData ? (
        <div className={styles.card}>
          <Downloaded data={fileData} />
        </div>
      ) : (
        <div className={styles.card}>
          <Card>
            <>
              <Lottie options={lottieOptions} height={400} />
              {isValid ? (
                <h3
                  style={{ textAlign: "center", color: "#e74c3c" }}
                >{`${isValid}!`}</h3>
              ) : (
                <h1>Searching...</h1>
              )}
            </>
          </Card>
        </div>
      )}
    </>
  );
}

export default FileLink;
