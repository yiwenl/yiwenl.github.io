// model
import SiteData from "../../model/data";

// components
import Meta from "../../components/Meta";
import Header from "../../components/Header";

const Project = ({ project }) => {
  return (
    <>
      <Meta title={`Wensday | ${project.title}`} />
      <Header />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
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
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};
