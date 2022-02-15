import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Downloaded from "../Download/Downloaded";
import { ToastContainer, toast } from "react-toastify";
import { getFile } from "../../services/APIservices";
import { codeSchema } from "../../services/schema";
import Lottie from "react-lottie";
import searching from "../../Assets/searching.json";
import styles from "../Home/Home.module.css";
import Home from "../Home/FileLink";

function FileLink() {
  const { code } = useParams();
  const [fileData, setFileData] = useState(false);

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
        toast.error("Invalid Code! Check the code", { autoClose: 3000 });
        setTimeout(() => {
          window.location.href = "/download";
        }, 3000);
      }
    } catch (err: any) {
      toast.error(err.message, { autoClose: 3000 });
      setTimeout(() => {
        window.location.href = "/download";
      }, 3000);
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
    <div>
      <ToastContainer />
      {fileData ? (
        <div className={styles.content}>
          <div className={styles.card}>
            <Downloaded data={fileData} />
          </div>
          <div className={styles.home}>
            <Home />
          </div>
        </div>
      ) : (
        <div style={{ display: "grid", placeContent: "center" }}>
          <h1 style={{ color: "#fff" }}>Searching...</h1>
          <Lottie
            options={lottieOptions}
            height={400}
            width={200}
            style={{ transform: "translateY(-50px)" }}
          />
        </div>
      )}
    </div>
  );
}

export default FileLink;
