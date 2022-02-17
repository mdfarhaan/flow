import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import styles from "./Home.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <a href="https://github.com/mdfarhaan">
          <IoLogoGithub size={28} color={"#fff"} />
        </a>
        <a href="https://www.linkedin.com/in/mdfarhaan/">
          <IoLogoLinkedin
            size={31}
            color={"#fff"}
            className={styles.linkedin}
          />
        </a>
        <a href="https://mdfarhaan.tk/">
          <BsGlobe size={20} color={"#fff"} className={styles.globe} />
        </a>
      </div>
      <p style={{ fontSize: 18 }}>
        Made with{" "}
        <AiFillHeart size={26} className={styles.icon} color={"red"} /> by
        MdFarhaan
      </p>
    </div>
  );
}

export default Footer;
