import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Service from "./components/services/Service.jsx";
import Work from "./components/works/Work.jsx";

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Work />
    </div>
  )
}

export default App
