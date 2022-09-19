import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);

  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 70%;
`;

const Title = styled.h3`
  font-size: 4rem;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 1rem;
`;

const Desc = styled.p`
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: 0.02rem;
`;

function About() {
  return (
    <Container>
      <TextContainer>
        <Title>Hello,</Title>
        <Desc>
          My name is Yi-Wen Lin (<i>Wen</i>). I am a freelance creative coder
          based in London. After living in western culture for all these years,
          I am still attached to the eastern culture and get even more inspired
          by it now. Not only working with eastern culture element, I am trying
          to combine different culture elements that I get from all these years
          living in foreign countries.
        </Desc>

        <Desc>Here are some links to my projects / experiments.</Desc>
      </TextContainer>
    </Container>
  );
}

export default About;
