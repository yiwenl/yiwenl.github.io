import logo from "./logo.svg";
import "./App.css";

// components
import Header from "./components/header";
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Landing />
      </header>
    </div>
  );
}

export default App;
