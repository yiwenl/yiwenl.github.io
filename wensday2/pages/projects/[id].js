// model
import SiteData from "../../model/data";

import styles from "../../styles/Project.module.css";

import Image from "next/image";

// components
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Media from "../../components/Media";
import Footer from "../../components/Footer";

const Project = ({ project }) => {
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
      <Footer />
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
