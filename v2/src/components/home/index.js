import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(255, 0, 0, 0.1);
`;

function Home() {
  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  );
}

export default Home;
