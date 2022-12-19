import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Proficiencies from './components/Proficiencies';

import { Link } from 'react-scroll';

import './App.css';
// import { useEffect, useRef } from "react";

const Links = {
  instagram: "https://instagram.com/sihlecodes",
  whatsapp: "https://wa.me/27633994508",
  github: "https://github.com/sihlecodes",
  itch: "https://sihlecodes.itch.io"
}

function App() {
  const A = ({ target, children }) => <Link activeClass="active" smooth spy to={target}>{children}</Link>;
  // const app = useRef();

  // useEffect(() => { app.current.style.display = 'block' }, []);

  return (
    <div className="App">
       {/* ref={app}> */}
      <nav>
        <A target="about">About</A>
        <A target="proficiencies">Proficiencies</A>
        <A target="contact">Contact</A>
      </nav>
      <Header />

      <div className="App-content-area">
        <section id="about"><About /></section>
        <section id="proficiencies"><Proficiencies /></section>
      </div>

      <section id="contact" className='App-contact-section'>
        <Contact />
      </section>
    </div>
  );
}

export { Links };
export default App;
