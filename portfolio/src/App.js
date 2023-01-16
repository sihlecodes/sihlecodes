import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Proficiencies from './components/Proficiencies';

// import { AboutIconLink2 } from "./components/About";
import { Link } from 'react-scroll';

import itchIcon from './assets/itch-io.svg';
import githubIcon from './assets/github.svg';
import instagramIcon from './assets/instagram.svg';


import './App.scss';
// import { useEffect, useRef } from "react";

const Links = {
  instagram: "https://instagram.com/sihlecodes",
  whatsapp: "https://wa.me/27633994508",
  github: "https://github.com/sihlecodes",
  itch: "https://sihlecodes.itch.io"
}

const NavLink = ({ href, src, alt }) => (
  <a className="App-nav-link" href={href}>
    <img alt={alt} src={src} />
  </a>
);

function App() {
  const A = ({ target, children }) => <Link activeClass="active" smooth spy to={target}>{children}</Link>;
  // const app = useRef();

  // useEffect(() => { app.current.style.display = 'block' }, []);

  return (
    <div className="App">
      {/* ref={app}> */}
      <nav>
        <span><b>sihle</b>.codes</span>

        <A target="about">About</A>
        <A target="proficiencies">Proficiencies</A>
        <A target="contact">Contact</A>

        <div className="App-nav-icons">
          <NavLink src={githubIcon} href={Links.github} />
          <NavLink src={itchIcon} href={Links.itch} />
          <NavLink src={instagramIcon} href={Links.instagram} />
        </div>
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
