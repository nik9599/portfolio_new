import "./App.css";
import Header from "./component/Header/Header.jsx";
import Home from "./component/Main/Main.jsx";
import About from "./component/About/About.jsx";
import Services from "./component/Services/Services";
import Testimonial from "./component/testimonial/Testimonial.jsx";
import Footer from "./component/footer/Footer.jsx";
import Contact from "./component/contact/Contact";
import Skill from "./component/Skill/Skill";


function App() {
  return (
    <div className="main">
    
    <Header />
      <Home />
      <About />
      <Services />
      <Skill />
      <Testimonial/>
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
