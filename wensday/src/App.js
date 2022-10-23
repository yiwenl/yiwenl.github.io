import logo from "./logo.svg";
import "./App.css";

// components
import Header from "./components/header";
import Landing from "./components/landing";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Landing />
        <Footer />
      </header>
    </div>
  );
}

export default App;
