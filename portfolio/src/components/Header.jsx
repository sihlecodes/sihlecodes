import './Header.scss';

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
    </header>
  );
}

export default Header;