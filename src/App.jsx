import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Service from "./components/services/Service.jsx";
import Work from "./components/works/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        {/*<Work />*/}
        <Contact />
        <Footer />
    </div>
  )
}

export default App
