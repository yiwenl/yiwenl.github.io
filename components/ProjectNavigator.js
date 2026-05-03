import Link from "next/link";
import styles from "../styles/ProjectNavigator.module.css";

const ProjectNavigator = ({ title, id }) => {
  return (
    <div className={styles.container}>
      <p>
        Next
        <br />
        Project
      </p>
      <Link href="/projects/[id]" as={`/projects/${id}`}>
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

export default ProjectNavigator;
