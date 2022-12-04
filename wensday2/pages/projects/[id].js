// model
import SiteData from "../../model/data";

import styles from "../../styles/Project.module.css";

import Image from "next/image";

// components
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Media from "../../components/Media";
import Footer from "../../components/Footer";
import ProjectNavigator from "../../components/ProjectNavigator";

const Project = ({ project }) => {
  const { projects } = SiteData;
  let index = -1;
  projects.forEach((p, i) => {
    if (p.id === project.id) {
      index = i;
    }
  });
  const nextIndex = index === projects.length - 1 ? 0 : index + 1;
  const nextProject = projects[nextIndex];
  const { medias, description } = project;
  return (
    <>
      <Meta title={`Wensday | ${project.title}`} />
      <Header />
      <div>
        <div className={styles.imageWrapperMain}>
          <Image src={project.innerCover} fill alt={project.title} />
        </div>
        <div className={styles.container}>
          <p className={styles.description}>{description}</p>

          <div className={styles.medias}>
            {medias.map((m, i) => (
              <Media key={"media" + i} media={m} />
            ))}
          </div>
        </div>
      </div>
      <ProjectNavigator title={nextProject.title} id={nextProject.id} />
      <Footer mini={true} />
    </>
  );
};
export default Project;

export const getStaticProps = async (context) => {
  const project = SiteData.projects.find((p) => p.id === context.params.id);
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const { projects } = SiteData;
  const ids = projects.map((p) => p.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
