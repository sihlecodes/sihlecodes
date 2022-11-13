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
          During my grade 3 year I was tasked to create a recycling awareness poster for my school and later on that year
          I received the award for computer skills.
        </p>
        <p>
          Skipping forward a couple of years, when I was my grade 9 year I became curious about programming. I initially assumed that I needed to know binary and so I learnt how the binary number system works and how these numbers get converted into other characters using the ASCII character encoding scheme. I later on realized that learning binary was not getting me any closer to my goal of learning how to program. So, I went back to the drawing board and instead of assuming; this time I searched the internet asking the simple question "How do you program?". I went through a couple of web pages and eventually discovered the first programming language I learnt, python.
        </p>
        <p>
          Over the years I've spent a fair amount of time on languages such as ruby, java, groovy, javascript. I've also dabbled in C/C++, C# and shell scripting languages such as bash and zsh.
        </p>
        <h3>Check out some of my work</h3>
        <p>
          A quick word of warning: I haven't used my instagram for a while. 😅</p>

        <div className="App-icon-links">
          <IconLink src={githubIcon} href="https://github.com/sihlecodes" label="Github" />
          <IconLink src={itchIcon} href="https://sihlecodes.itch.io" label="Itch.io" />
          <IconLink src={instagramIcon} href="https://instagram.com/sihlecodes" label="Instagram" />
        </div>

        <h2>Proficiencies</h2>

        <h3>Programming Languages</h3>
        <p>A list of programming languages I've used for the most time. Ordered by experience.</p>

        <p><b>Python</b> 3+ years</p>
        <p>
          Python is the very first programming language I learned. I started learning it when I was 15. Over the years I've been consistently using it for automating terminal tasks and once every while I'd work on an app using the kivy framework.
        </p>

        <p><b>Ruby</b> about a year</p>
        <p>
          I learned ruby 2nd it is by far the language I enjoyed the most to use. Back when I learned it I was way more concerned about using languages that were popular and it being not that popular crushed my love for the language. 💔
        </p>

        <p><b>Java</b> 2 years</p>
        <p>
          I started learning java in my final year of highschool. The same year, I was introduced to LibGDX (a game development kit). The game dev basics I learned from LibGDX came in handy with Godot. Since then, I've also experimented with other JVM derivatives such as Kotlin and Groovy (which was my favorite of the JVM languages).
        </p>

        <p><b>Javascript</b> 2+ years</p>
        <p>
          I started learning javascript later in highschool, I believe, when I was 17. At that time I was very fascinated by the Qt framework and I used Javascript along with their QML language to make gui applications. Later on I moved to using it to create webpages (how surprising 😅) as well as to create mobile apps with React Native.
        </p>

        <p><b>C#</b> 1 year</p>
        <p>
          This happens to be the latest languages I've learnt. I learnt it as part of my first year modules in university. I don't find it particularly interesting. I guess I like the almost java like structure and syntax. 🤣
        </p>

        <p>I've also briefly played around the ARM flavor of assembler, C/C++</p>

        <h3>Frameworks</h3>
        <p>A list of frameworks I've used. Ordered by experience.</p>
        <p>Kivy</p>
        <p>Qt/QML</p>
        <p>React</p>
        <p>React Native</p>

        <h2>Contact</h2>
        <p>
          If you want to contact me you can either shoot me an email or give me a call/send a whatsapp message. Word of advice, I check emails more frequently.
        </p>
        <p>sihlecodes@gmail.com</p>
        <p>0633994508</p>
      </div>
    </div>
  );
}

export default App;
