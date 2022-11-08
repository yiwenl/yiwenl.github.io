import "./App.css";

// Router
import { HashRouter, Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

// components
import Header from "./components/header";
import Landing from "./components/landing";
import Footer from "./components/footer";
import Generative from "./components/generative";
import Info from "./components/info";
import Project from "./components/project";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <div className="App">
        <header className="App-header">
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/generative" exact component={Generative} />
            <Route path="/project/:id" exact component={Project} />
            <Route path="/info" exact component={Info} />
          </Switch>
          <Footer />
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
