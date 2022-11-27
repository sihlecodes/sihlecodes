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
        <div className="Header-content">
          <div className="Header-experience-text" >
            <div className="App-big-text App-big-font">{getYearsOfExperience()}+</div>
            <div className="App-medium-text">years</div>
            <div>of coding</div>
          </div>

          <div className="Header-greeter">
            <p>Hi I'm</p>
            <div className="Header-banner">
              <span class="Header-name-text App-big-font">Siphesihle Mhlongo</span>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;