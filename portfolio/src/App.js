import itchIcon from './assets/itch-io.svg';
import githubIcon from './assets/itch-io.svg';
import './App.css';

function App() {
  const yearOfStart = 2015
  var yearsOfCodingExpirience = new Date().getFullYear() - (yearOfStart + 1);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <div className="App-experience-text" >
            <div className="App-big-text">{yearsOfCodingExpirience}+</div>
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
        <p>Magna dignissim augue fermentum ante potenti gravida id iaculis gravida dictum augue. Eget non platea feugiat dis viverra faucibus. Ridiculus pretium cursus gravida est dolor. Ridiculus sociosqu sodales sit rutrum. Suscipit imperdiet nunc maecenas, potenti magna feugiat. Sem sagittis nulla aliquet et cursus. A ut praesent vel pretium? Id pretium fringilla pretium semper. Duis fermentum per laoreet parturient habitant dolor praesent. Habitant rutrum hac condimentum sem. Tempus aliquam lacus habitant litora. Felis natoque feugiat aptent nibh et iaculis bibendum dictum! Id ligula dictumst posuere natoque potenti netus aenean. Conubia ad ante dapibus bibendum volutpat.</p>
        <p>Blandit gravida at cursus vitae? Dui proin ultricies tempor suscipit massa phasellus quisque. Penatibus vel arcu amet luctus massa. Eget sed euismod malesuada orci pharetra ante. Justo magna libero pulvinar turpis dictum eget malesuada? Duis cursus pharetra vehicula curae; mi primis iaculis primis. Iaculis lobortis parturient felis auctor est, tincidunt curae; nullam tincidunt posuere. Molestie suspendisse taciti eros nascetur torquent sapien maecenas ornare ante habitant natoque sit. Arcu molestie nibh massa placerat rutrum urna hendrerit nibh. Pharetra!</p>
        <p>Adipiscing volutpat ante justo felis tellus netus nostra eget maecenas. Donec facilisis dignissim ultrices suspendisse nibh! Magna dapibus molestie duis. Magna nascetur duis et pellentesque ad pretium iaculis. Vel lorem felis in ac diam iaculis! Quis suscipit felis volutpat, duis laoreet. Himenaeos suscipit sociis tellus, convallis non. Natoque erat parturient curae; curae; luctus dis lacus massa ultricies. Et, tristique scelerisque pharetra nulla suspendisse. Parturient nullam luctus eu velit ligula arcu ante orci commodo cubilia. Class quisque maecenas pretium facilisi dictumst venenatis donec amet vehicula lacinia turpis aenean. Tempor.</p>
        <p>Nibh eros in est vehicula bibendum facilisis tortor? Pharetra sagittis quam in diam lacinia malesuada cras ultricies? Accumsan dignissim tellus lacus semper duis dis nibh cras. Tempor laoreet volutpat semper nibh vulputate curae; viverra dictum; ultricies sodales. Porta platea risus non nec curae; ultrices blandit diam luctus scelerisque faucibus dui. Dictum habitasse tortor aenean. Erat dignissim pulvinar, varius phasellus orci integer suspendisse cubilia. Odio quis, varius amet scelerisque hendrerit fames.</p>

        <div className="App-icons">
          <img className="App-icon" src={itchIcon} />
          <img className="App-icon" src={githubIcon} />
        </div>

        <h2>Contact</h2>
        <p>Iaculis ullamcorper commodo consectetur proin? Nam accumsan, laoreet dis posuere! Fermentum accumsan odio mauris taciti tempor duis convallis magnis facilisis tempor. Vivamus dictumst magnis, venenatis sapien velit class curabitur? Curae; nibh aenean magna at commodo auctor. Ac vivamus phasellus natoque morbi. Hac parturient primis facilisis vestibulum tempus ultricies. Velit est dui eleifend nulla proin euismod nostra varius nisl justo nascetur ultrices. Nec nostra etiam blandit ad tortor natoque magna pretium ligula. Suspendisse nascetur ad sapien vivamus. Diam rutrum sit lobortis, nostra scelerisque gravida libero laoreet mi curae;.</p>
      </div>
    </div>
  );
}

export default App;
