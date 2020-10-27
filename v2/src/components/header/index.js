import styled from "styled-components";
import { Link } from "react-router-dom";
import SiteData from "../../model/SiteData";

const Container = styled.div`
  width: 100%;
  color: black;
  background-color: white;
`;

function Header() {
  const { projects } = SiteData;

  return (
    <Container>
      <h3>Header</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        {projects.map(({ id, title }) => {
          return (
            <Link key={id} to={`/project/${id}`}>
              <li>{title}</li>
            </Link>
          );
        })}
      </ul>
    </Container>
  );
}

export default Header;
