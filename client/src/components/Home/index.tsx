import Lottie from "react-lottie";
import landing from "../../Assets/landing1.json";
import styles from "./Home.module.css";
import Footer from "./Footer";
import { VerticalLine, HorizontalLine } from "../helper";
import logo from "../../Assets/logo.gif";

function Home() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: landing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div
        className={styles.header}
        onClick={() => (window.location.href = "/")}
      >
        <img src={logo} alt="logo" height="60" />
      </div>
      <VerticalLine />
      <HorizontalLine />
      <div className={styles.body}>
        <div className={styles.info}>
          <h1>Flow</h1>
          <p>
            Upload your <strong>File</strong>. Get a <strong>Link</strong>
          </p>
          <p>
            Download your <strong>File</strong> with your code!
          </p>
        </div>
        <Lottie options={lottieOptions} height={600} width={600} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
