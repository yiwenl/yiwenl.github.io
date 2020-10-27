import styled from "styled-components";
import SiteData from "../../model/SiteData";

const Container = styled.div`
  background: rgba(0, 255, 0, 0.1);
`;

function Project({ match }) {
  const { id } = match.params;
  const projectData = SiteData.projects.filter((p) => p.id === id)[0];
  console.log(projectData);

  return (
    <Container>
      <h1>Project Page : {id}</h1>
    </Container>
  );
}

export default Project;
