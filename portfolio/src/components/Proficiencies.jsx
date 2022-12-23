import { Fragment } from 'react';

import python from '../assets/python.svg';
import java from '../assets/java.svg';
import javaScript from '../assets/javascript.svg';
import './Proficiencies.css';

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

const FrameworkCard = ({name}) => (
  <div className="Framework-card">
    <div className="picture"></div>
    <p className="text">{name}</p>
  </div>
);

function Proficiencies() {
  return (
    <Fragment>
      <h2>Proficiencies</h2>

      <div className="Proficiencies-content ">
        <h3>Libraries / Frameworks / Engines</h3>
        
        <p>These are the frameworks I've used over the years in the order of being introduced to them.</p>
        <div className="App-text-content">
          <div className="Framework-cards">
            <FrameworkCard name="Kivy" />
            <FrameworkCard name="Qt/QML" />
            <FrameworkCard name="jQuery" />
            <FrameworkCard name="LibGDX" />
            <FrameworkCard name="Swing" />
            <FrameworkCard name="Godot" />
            <FrameworkCard name="React" />
            <FrameworkCard name="React Native" />
          </div>

          <h3>Top 3 Most Used Languages</h3>

          <p>Over the years, these are the conventional languages I've used the most during my programming career.</p>

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
      </div>

    </Fragment>);
}

export default Proficiencies;
