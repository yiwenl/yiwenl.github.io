import styles from "../styles/Project.module.css";

import Image from "next/image";
import ReactPlayer from "react-player";

const Media = ({ media: { type, url } }) => {
  if (type === "image") {
    return (
      <div className={styles.imageWrapper}>
        <Image src={url} fill alt={url} />
      </div>
    );
  } else {
    return (
      <div className={styles.imageWrapper}>
        <ReactPlayer url={url} controls={true} width="100%" height="100%" />
      </div>
    );
  }
};

export default Media;
