import styles from "../styles/Landing.module.css";
import Image from "next/image";
// import WebGL from "./WebGL";
import bg from "../assets/cover.jpg";

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
      <h1>
        WENSDAY is the portfolio of
        <br />
        Yi-Wen LIN — creative coder and generative artist from Taiwan.
        <br />
        <br /> Based in London, UK. Working remotely with clients and partners
        worldwide.
      </h1>
    </div>
  );
};

export default Landing;
