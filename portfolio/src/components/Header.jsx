import './Header.scss';

function getYearsOfExperience() {
  const STARTING_YEAR = 2015
  return new Date().getFullYear() - (STARTING_YEAR + 1);
}

function Header() {
  return (
    <div className="Header">
      <div className="experience-badge" >
        <div className="years">{getYearsOfExperience()}+</div>
        <span>years</span>of coding
      </div>

      <div className="banner">
        <p>Hi I'm</p>
        <h1>Siphesihle Mhlongo</h1>
      </div>
    </div>
  );
}

export default Header;