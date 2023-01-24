import About from './components/About';
import Contact from './components/Contact';
import Cover from './components/Cover';
import Proficiencies from './components/Proficiencies';

import { Link } from 'react-scroll';

import itchIcon from './assets/itch-io.svg';
import githubIcon from './assets/github.svg';
import instagramIcon from './assets/instagram.svg';


import './App.scss';

const Links = {
  instagram: "https://instagram.com/sihlecodes",
  whatsapp: "https://wa.me/27633994508",
  github: "https://github.com/sihlecodes",
  itch: "https://sihlecodes.itch.'io"
}

const NavLink = ({ href, src, alt }) => (
  <a className="App-nav-icon" href={href}>
    <img alt={alt} src={src} />
  </a>
);

function App() {
  const A = ({ target, children }) => <li><Link activeClass="active" smooth spy to={target}>{children}</Link></li>;
  
  return (
    <div className="App">
      {/* <header> */}
        <nav>
          <span><b>sihle</b>.codes</span>

          <ul className="App-nav-links">
            <A target="about">About</A>
            <A target="proficiencies">Proficiencies</A>
            <A target="contact">Contact</A>

            <div className="App-nav-icons">
              <NavLink src={githubIcon} href={Links.github} />
              <NavLink src={itchIcon} href={Links.itch} />
              <NavLink src={instagramIcon} href={Links.instagram} />
            </div>
          </ul>
        </nav>
      {/* </header> */}

      <Cover />

      <div className="content-area">
        <section id="about">
          <About />
        </section>

        <section id="proficiencies">
          <Proficiencies />
        </section>
      </div>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export { Links };
export default App;
