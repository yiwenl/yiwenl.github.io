import styled from "styled-components";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";

const Container = styled.div`
  max-width: 1215px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project/:id" component={Project} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
