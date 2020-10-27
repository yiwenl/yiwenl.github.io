import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project/:id" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
