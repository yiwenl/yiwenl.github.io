import styled from "styled-components";
import { Link } from "react-router-dom";
import SiteData from "../../model/SiteData";
import "./header.scss";

const Container = styled.div`
  width: 100%;
  height: 50px;
  color: black;
  display: flex;

  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding-left: 1px;
  padding-right: 2px;
`;

const LinkContainer = styled.div``;

const Title = styled.h3`
  font-family: "Roboto";
  font-weight: 500;
  font-style: italic;
`;

const ButtonLink = styled.div`
  float: left;
  cursor: pointer;

  color: black;
  text-declaration: none;
  margin-left: 1rem;
`;

function Header() {
  const { about } = SiteData;

  return (
    <Container>
      <Title>{about.name}</Title>
      <LinkContainer>
        <Link to="/">
          <ButtonLink>Projects</ButtonLink>
        </Link>
        <Link to="/about">
          <ButtonLink>About</ButtonLink>
        </Link>
      </LinkContainer>
    </Container>
  );
}

export default Header;
