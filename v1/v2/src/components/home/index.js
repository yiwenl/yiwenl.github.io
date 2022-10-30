import styled from "styled-components";
import SiteData from "../../model/SiteData";
import ProjectLink from "./ProjectLink";

const Container = styled.div`
  width: 100%;
  background: rgba(255, 0, 0, 0.5);
`;

function Home() {
  const { projects } = SiteData;

  return (
    <Container>
      {projects.map((project) => {
        return <ProjectLink key={project.id} {...project} />;
      })}
    </Container>
  );
}

export default Home;
