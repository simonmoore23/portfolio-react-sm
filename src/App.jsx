import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro.jsx"
import About from "./components/About/about.jsx"
import Portfolio from "./components/Portfolio/portfolio.jsx";

function App() {
    return (
      <div className="card">
          <Navbar />
          <Intro />
          <About />
          <Portfolio />
      </div>
  );
}

export default App