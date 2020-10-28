import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 50%;
  padding-bottom: 28.125%; /* 16:9 */
  position: relative;
  background: rgba(0, 255, 0, 0.5);
  float: left;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid white;
`;

const TextContainer = styled.div`
  position: absolute;
  color: white;
  z-index: 10;
  bottom: 0;
  font-size: 2rem;
  width: 100%;
  height: 3rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const Img = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const ProjectLink = ({ id, cover, title, subtitle }) => {
  const src = `${process.env.PUBLIC_URL}/images/${cover}`;
  return (
    <Container>
      <Link to={`/project/${id}`}>
        <div>
          <TextContainer>{title}</TextContainer>
          <Img src={src}></Img>
        </div>
      </Link>
    </Container>
  );
};

export default ProjectLink;
