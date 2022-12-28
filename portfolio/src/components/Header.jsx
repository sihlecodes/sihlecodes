import './Header.css';

import itchIcon from '../assets/itch-io.svg';
import githubIcon from '../assets/github.svg';
import instagramIcon from '../assets/instagram.svg';
import resume from '../assets/CV.pdf';

import me from '../assets/me-optimized.png';

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

      <div className="About-icon-links">
        <AboutIconLink src={githubIcon} href={Links.github} label="Github" />
        <AboutIconLink src={itchIcon} href={Links.itch} label="Itch.io" />
        <AboutIconLink src={instagramIcon} href={Links.instagram} label="Instagram" />
      </div>
    </header>
  );
}

export default Header;