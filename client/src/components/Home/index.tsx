import Lottie from "react-lottie";
import { useMediaQuery } from "react-responsive";
import landing from "../../Assets/landing1.json";
import styles from "./Home.module.css";
import Footer from "./Footer";
import { VerticalLine, HorizontalLine } from "../helper";
import logo from "../../Assets/logo.gif";
function Home() {
  const md = useMediaQuery({ query: "(max-width: 1500px)" });
  const sm = useMediaQuery({ query: "(max-width: 750px)" });

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: landing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let width = md ? 400 : 600;

  return (
    <>
      <div className={styles.header}>
        <a className={styles.logo} href="/">
          <img src={logo} alt="logo" height="60" />
        </a>
        <div className={styles.link}>
          <a href="/download">Download</a>
        </div>
      </div>
      <VerticalLine />
      <HorizontalLine />
      <div className={styles.body}>
        <div className={styles.info}>
          <h1>Flow</h1>
          <p>
            Upload your <strong>File</strong>. Get a <strong>Link</strong>
          </p>
        </div>
        {!sm && <Lottie options={lottieOptions} height={width} width={width} />}
      </div>
      <Footer />
    </>
  );
}

export default Home;
