import Image from "next/image";
import styles from "../styles/ProjectItem.module.css";

const ProjectItem = ({ project: { title, subtitle, innerCover: cover } }) => {
  const w = 1024;
  const h = (w * 9) / 16;
  return (
    <div class={styles.container}>
      <div className={styles.title}>
        <p>
          FEATURED
          <br />
          PROJECTS
        </p>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <Image src={cover} width={w} height={h} alt={cover} />
    </div>
  );
};

export default ProjectItem;
