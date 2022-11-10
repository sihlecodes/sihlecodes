import itchIcon from './assets/itch-io.svg';
import githubIcon from './assets/github.svg';
import instagramIcon from './assets/instagram.svg';
import './App.css';

function getYearsOfExpirience() {
  const STARTING_YEAR = 2015
  return new Date().getFullYear() - (STARTING_YEAR + 1);
}

function IconLink({ href, src, alt, label }) {
  return (
    <a className="App-icon-link" href={href}>
      <img alt={alt} src={src} />
      <p>{label}</p>
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <div className="App-experience-text" >
            <div className="App-big-text App-big-font">{getYearsOfExpirience()}+</div>
            <div className="App-medium-text">years</div>
            <div>of coding</div>
          </div>

          <div className="App-greeter">
            <p>Hi I'm</p>
            <div className="App-banner">
              <span class="App-name-text App-big-font">Siphesihle Mhlongo</span>
            </div>
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
          <IconLink src={githubIcon} href="https://github.com/sihlecodes" label="Github" />
          <IconLink src={itchIcon} href="https://sihlecodes.itch.io" label="Itch.io" />
          <IconLink src={instagramIcon} href="https://instagram.com/sihlecodes" label="Instagram" />
        </div>

        <h2>Proficiencies</h2>

        <h3>Programming Languages</h3>
        <p>A list of programming langauges I've used. Ordered by experience.</p>
        <p>Python 3 years</p>
        <p>Java 2 years</p>
        <p>C# 1 year</p>
        <p>Javascript 1+ years</p>
        <p>Ruby about a year</p>

        <h3>Frameworks</h3>
        <p>A list of frameworks I've used. Ordered by experience.</p>
        <p>React</p>
        <p>React Native</p>
        <p>Kivy</p>
        <p>Qt/QML</p>

        <h2>Contact</h2>
        <p>If you want to contact me you can either shoot me an email or give me a call/send a whatsapp message. Word of advice, I check emails more frequently.</p>
        <p>sihlecodes@gmail.com</p>
        <p>0633994508</p>
      </div>
    </div>
  );
}

export default App;
