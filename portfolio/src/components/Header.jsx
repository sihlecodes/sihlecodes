import { Fragment } from "react";

import './Header.css';

function getYearsOfExperience() {
  const STARTING_YEAR = 2015
  return new Date().getFullYear() - (STARTING_YEAR + 1);
}

function Header() {
  return (
    <Fragment>
      <header className="Header">
        <nav>
          <a href="blank">About</a>
          <a href="blank">Proficiencies</a>
          <a href="blank">Contact</a>
        </nav>
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
      </header>
    </Fragment>
  );
}

export default Header;