import styles from "../styles/Generative.module.css";
import Image from "next/image";
const GenerativeItem = ({ project, small }) => {
  const _isSmall = small === undefined ? false : small;
  const style = _isSmall ? `${styles.item} ${styles.itemSmall}` : styles.item;

  const path = `/assets/generative/${project.path}`;

  return (
    <div className={style}>
      <div className={styles.imageWrapper}>
        <a href={project.url} target="_blank">
          <Image src={path} fill alt={project.title} />
        </a>
      </div>
      <a href={project.url} target="_blank">
        <h2 className={styles.projectTitle}>{project.title}</h2>
      </a>
    </div>
  );
};

export default GenerativeItem;
