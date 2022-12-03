import styles from "../styles/Footer.module.css";
import Link from "next/Link";

const Footer = ({ mini, dark }) => {
  let _isMini = mini === undefined ? false : mini;
  let _isDark = dark === undefined ? false : dark;

  let containerStyle = styles.container;
  if (_isMini) containerStyle += " " + styles.mini;

  let containerTop = styles.topContainer;
  if (_isDark) containerTop += " " + styles.dark;

  let containerLinks = styles.links;
  if (_isDark) containerLinks += " " + styles.dark;

  return (
    <div className={containerStyle}>
      {!_isMini && (
        <div className={containerTop}>
          <Link href="/" as="/">
            <p>Home</p>
          </Link>
          <a href="https://yiwenl.github.io/Sketches" target="_blank">
            <p>Sketches</p>
          </a>
          <Link href="/generative" as="/generative">
            <p className="last-child">Generative</p>
          </Link>
        </div>
      )}
      <div className={containerLinks}>
        <div className={styles.social}>
          <a href="https://instagram.com/yiwen" target="_blank">
            <p>instagram</p>
          </a>
          <a href="https://twitter.com/yiwen_lin" target="_blank">
            <p>twitter</p>
          </a>
        </div>
        <div className={styles.email}>
          <a href="mailto:bongiovi015@gmail.com">
            <p>say hi</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
