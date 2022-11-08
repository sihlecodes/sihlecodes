import itchIcon from './assets/itch-io.svg';
import githubIcon from './assets/github.svg';
import './App.css';

function getYearsOfExpirience() {
  const STARTING_YEAR = 2015
  return new Date().getFullYear() - (STARTING_YEAR + 1);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <div className="App-experience-text" >
            <div className="App-big-text">{getYearsOfExpirience()}+</div>
            <div className="App-medium-text">years</div>
            <div>of coding</div>
          </div>

          <div className="App-greeting-text">
            <div className="App-big-text">Hi</div>
            I'm <span class="App-name-text">Siphesihle Mhlongo</span>
          </div>
        </div>
      </header>

      <div className="App-content">
        <h2>About</h2>
        <p>
          Ever since I was young I always new I wanted to do something related to technology; I found it fascinating.
          During my grade 3 year I was tasked to create a recyling awareness poster for my school and later on that year
          I recieved the award for computer skills.
        </p>
        <p>
          Skipping forward a couple of years, when I was my grade 9 year I became curious about programming.
          I intially assumed that I needed to know binary and so I learnt how the binary number system works and how these
          numbers get converted into other characters using the ASCII character encoding scheme.
          I later on realised that learning binary was not getting me any closer to my goal of learning how to program.
          So, I went back to the drawing board and instead of assuming; this time I searched the internet asking the simple question "How do you program?".
          I went through a couple of web pages and eventully discoved the first programming language I learnt, python.
        </p>
        <p>
          Over the years I've spent a fair amount of time on languages such as ruby, java, groovy, javascript.
          I've also dabbled in c/c++, c# and shell scripting languages such as bash and zsh.
        </p>

        <div className="App-icon-links">
          <a className="App-icon-link" href="https://github.com/sihlecodes">
            <img alt="" src={itchIcon} />
            <p>Github</p>
          </a>
          <a className="App-icon-link" href="https://sihlecodes.itch.io">
            <img alt="" src={githubIcon} />
            <p>Itch.io</p>
          </a>
        </div>

        <h2>Contact</h2>
        <p>If you want to contact me you can either shoot me an email or give me a call/send a whatsapp message. Word of advice, I check emails more frequently.</p>
        <p>sihlecodes@gmail.com</p>
        <p>0633994508</p>
      </div>
    </div>
  );
}

export default App;
