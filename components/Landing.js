import styles from "../styles/Landing.module.css";
// import WebGL from "./WebGL";
import bg from "../assets/cover.jpg";

const LINES = [
  "WENSDAY is the portfolio of",
  "Yi-Wen LIN — creative coder and generative artist from Taiwan.",
  "Based in London, UK. Working remotely with clients and partners worldwide.",
];

const Landing = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <WebGL /> */}
      {/* <div className={styles.coverWrapper}>
        <Image src={"/assets/cover.jpg"} fill alt={"cover"} />
      </div> */}
      <h1 className={styles.headline}>
        {LINES.map((text, i) => (
          <span
            key={i}
            className={`${styles.line} ${styles.fadeInUp}${i === 2 ? ` ${styles.lineGapBefore}` : ""
              }`}
            style={{ "--fade-delay": `${i * 80}ms` }}
          >
            {text}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Landing;
