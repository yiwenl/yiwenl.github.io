import logo from "./logo.svg";
import "./App.css";

// components
import Header from "./components/header";
import Landing from "./components/landing";
import Footer from "./components/footer";
import Generative from "./components/generative";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <Landing /> */}
        <Generative />
        <Footer />
      </header>
    </div>
  );
}

export default App;
