import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  color: black;
  background-color: white;
`;

function Header() {
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
        <Link to="/project/1">
          <li>Project 1</li>
        </Link>
        <Link to="/project/2">
          <li>Project 2</li>
        </Link>
      </ul>
    </Container>
  );
}

export default Header;
