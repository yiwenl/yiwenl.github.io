import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProjectItem.module.css";

const ProjectItem = ({
  project: { id, title, subtitle, innerCover: cover },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
          FEATURED
          <br />
          PROJECTS
        </p>
        <Link href="/projects/[id]" as={`/projects/${id}`}>
          <h2>{title}</h2>
        </Link>
        <h3>{subtitle}</h3>
      </div>
      <div className={styles.imageWrapper}>
        <Link href="/projects/[id]" as={`/projects/${id}`}>
          <Image src={cover} alt="" fill />
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
