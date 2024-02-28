import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro.jsx"
import About from "./components/About/about.jsx"
import Portfolio from "./components/Portfolio/portfolio.jsx";
import Contact from "./components/Contact/contact.jsx"

function App() {
    return (
      <div className="card">
          <Navbar />
          <Intro />
          <About />
          <Portfolio />
          <Contact />
      </div>
  );
}

export default App