import { Fragment } from 'react';

import python from '../assets/python.svg';
import java from '../assets/java.svg';
import javaScript from '../assets/javascript.svg';
import './Proficiencies.css';

function Card({ name, years, src, children }) {
  return (
    <div className='Proficiency-card'>
      <div className="picture" src={src}></div>
      <div className="text">
        <p><b>{name}</b> about {years} year{(Number(years) > 1) ? 's' : ''}</p>
        {children}
      </div>
    </div>
  );
}

function Proficiencies() {
  return (
    <Fragment>
      <h2>Proficiencies</h2>

      <div className="Proficiencies-content ">
        <div className="App-text-content">
          <h3>Top 3 Most Used Languages</h3>
          <p>Over the years, these are the conventional languages I've used the most during my programming career.</p>

        </div>

        <div className="Proficiency-cards">
          <Card name="Python" years="3" src={python}>
            My programming language of choice for writing automation scripts and creating quick & simple GUI programs using the kivy framework.
          </Card>

          <Card name="Java" years="2" src={java}>
            Back when I was more enthusiastic about developing android specific apps, I used java for creating games using the LibGDX framework.
          </Card>

          <Card name="Javascript" years="2" src={javaScript}>
            Besides using this language in webpages and React native apps, I’ve also used it for scripting along sides the Qt Modeling Language.
          </Card>
        </div>
      </div>

    </Fragment>);
}

export default Proficiencies;