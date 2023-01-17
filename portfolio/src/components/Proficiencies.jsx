import { Fragment } from 'react';

import python from '../assets/python.svg';
import java from '../assets/java.svg';
import javaScript from '../assets/javascript.svg';

import './Proficiencies.scss';

function LanguageCard({ name, years, src, children }) {
  return (
    <div className='Language-card'>
      <div className="picture" src={src}></div>
      <div className="text">
        <p><b>{name}</b> about {years} year{(Number(years) > 1) ? 's' : ''}</p>
        {children}
      </div>
    </div>
  );
}

const FrameworkCard = ({ name, level }) => (
  <div className="Framework-card">
    <div className="picture"></div>
    <div className="text">
      <b>{name}</b>
      <div className="level">{level}</div>
    </div>
  </div>
);

function Proficiencies() {
  return (
    <Fragment>
      <h2>Proficiencies</h2>

      <div className="Proficiencies-content ">
        <div className="App-text-content">
          <h3>Top 3 Most Used Languages</h3>
          <p>Over the years, I've used a lot of programming languages. However, these are the languages I have the most experience using.</p>
        </div>

        <div className="Language-cards">
          <LanguageCard name="Python" years="3" src={python}>
            My programming language of choice for writing automation scripts and creating quick & simple GUI programs using the kivy framework.
          </LanguageCard>

          <LanguageCard name="Java" years="2" src={java}>
            Back when I was more enthusiastic about developing android specific apps, I used java for creating games using the LibGDX framework.
          </LanguageCard>

          <LanguageCard name="Javascript" years="2" src={javaScript}>
            Besides using this language in webpages and React native apps, I’ve also used it for scripting along sides the Qt Modeling Language.
          </LanguageCard>
        </div>

        <div className="App-text-content">
          <h3>Libraries / Frameworks / Engines</h3>
          <p>These are amoungst the frameworks I've enjoyed the most using. I create personal app projects and games using them.</p>
        </div>

        <div className="Framework-cards">
          <FrameworkCard name="Kivy" level="Intermidiate" />
          <FrameworkCard name="Qt/QML" level="Beginner" />
          <FrameworkCard name="LibGDX" level="Beginner" />
          <FrameworkCard name="Godot" level="Advanced" />
          <FrameworkCard name="React" level="Intermidiate" />
          <FrameworkCard name="React Native" level="Beginner" />
        </div>
        
      </div>
    </Fragment>);
}

export default Proficiencies;
