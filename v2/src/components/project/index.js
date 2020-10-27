import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 255, 0, 0.1);
`;

function Project() {
  return (
    <Container>
      <h1>Project Page</h1>
    </Container>
  );
}

export default Project;
