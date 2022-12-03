import styles from "../styles/Header.module.css";
import Link from "next/Link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>
          WENSDAY.CO
          <br />/ YI-WEN LIN
        </div>
        <div>CREATIVE CODER</div>
      </div>
      <div className={styles.links}>
        <Link href="/" as="/">
          HOME
        </Link>
        <p>&nbsp;//&nbsp;</p>
        <a href="https://yiwenl.github.io/Sketches/" target="_blank">
          SKETCHES
        </a>
        <p>&nbsp;//&nbsp;</p>
        <Link href="/generative" as="/generative">
          GENERATIVE
        </Link>
        <p>&nbsp;//&nbsp;</p>
        <Link href="/info" as="/info">
          INFO
        </Link>
      </div>
    </div>
  );
};

export default Header;
