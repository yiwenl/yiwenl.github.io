// model
import SiteData from "../model/data";

// components
import Meta from "../components/Meta";
import Header from "../components/Header";
import Landing from "../components/Landing";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

export default function Home({ projects }) {
  return (
    <div>
      <Meta />
      <Header />
      <Landing />
      <ProjectList projects={projects} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      projects: SiteData.projects,
    },
  };
};
