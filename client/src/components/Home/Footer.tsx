import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import styles from "./Home.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <a href="https://github.com/mdfarhaan">
          <IoLogoGithub size={40} color={"#fff"} />
        </a>
        <a href="https://www.linkedin.com/in/mdfarhaan/">
          <IoLogoLinkedin
            size={43}
            color={"#fff"}
            className={styles.linkedin}
          />
        </a>
        <a href="https://mdfarhaan.tk/">
          <BsGlobe size={32} color={"#fff"} className={styles.globe} />
        </a>
      </div>
      <p>
        Made with{" "}
        <AiFillHeart size={30} className={styles.icon} color={"red"} /> by
        MdFarhaan
      </p>
    </div>
  );
}

export default Footer;
