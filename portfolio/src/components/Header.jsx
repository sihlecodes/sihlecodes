import './Header.css';

import itchIcon from '../assets/itch-io.svg';
import githubIcon from '../assets/github.svg';
import instagramIcon from '../assets/instagram.svg';
import Resume from '../assets/CV.pdf';

import { Links } from '../App';
import { AboutIconLink } from "./About";

function getYearsOfExperience() {
  const STARTING_YEAR = 2015
  return new Date().getFullYear() - (STARTING_YEAR + 1);
}

function Header() {
  return (
    <header className="Header">
      <div className="Header-content">
        <div className="Header-experience-badge" >
          <div className="Header-experience-years App-big-text App-big-font">{getYearsOfExperience()}+</div>
          <div className="App-medium-text">years</div>of coding
        </div>

        <div className="Header-intro-banner">
          <p>Hi I'm</p>
          <h1 className="App-big-font">Siphesihle Mhlongo</h1>
        </div>
      </div>

        <p>
          I am a Self-driven, hardworking, and dependable individual. I enjoy problem solving, programming, and
          learning new skills.
        </p>


        <a className="App-button" href={Resume} download="Curriculum Vitae">Download Resume</a>

        <div className="About-icon-links">
          <AboutIconLink src={githubIcon} href={Links.github} label="Github" />
          <AboutIconLink src={itchIcon} href={Links.itch} label="Itch.io" />
          <AboutIconLink src={instagramIcon} href={Links.instagram} label="Instagram" />
        </div>
        
        <ul className="About-values">
          <li>Honesty</li>
          <li>Innovation</li>
          <li>Growth</li>
          <li>Passion</li>
          <li>Reliability</li>
        </ul>
    </header>
  );
}

export default Header;