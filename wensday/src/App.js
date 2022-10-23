import "./App.css";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/header";
import Landing from "./components/landing";
import Footer from "./components/footer";
import Generative from "./components/generative";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/generative" exact element={<Generative />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
