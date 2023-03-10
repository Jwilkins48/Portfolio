import LeftSideBar from "../src/components/layout/LeftSideBar";
import Navbar from "../src/components/layout/Navbar";
import Home from "../src/components/sections/Home";
import About from "../src/components/sections/About";
import Projects from "../src/components/sections/Projects";
import Contact from "../src/components/sections/Contact";

function App() {
  return (
    <div className="App">
      <div className="mainContent overflow-x-hidden">
        <LeftSideBar />
        <Navbar />
        <Home />
        <About />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;
