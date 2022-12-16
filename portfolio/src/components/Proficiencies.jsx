import { Fragment } from 'react';

import python from '../assets/python.svg';
import ruby from '../assets/ruby.svg';
import java from '../assets/java.svg';
import javaScript from '../assets/javascript.svg';
import cSharp from '../assets/c-sharp.svg';
import './Proficiencies.css';

function Proficiency({ name, years, src, children }) {
  return (
    <div className='Proficiency'>
      <img src={src} alt={`A logo of the ${name} programming language.`} />
      <p><b>{name}</b> about {years} year{(Number(years) > 1) ? 's' : ''}</p>
      {children}
    </div>
  );
}

function Proficiencies() {
  return (
    <Fragment>
      <h2>Proficiencies</h2>

      <div className="Proficiencies-content ">
        <div className="App-text-content">
          <h3>Programming Languages</h3>
          
        </div>

        <div className="Proficiencies-display">
          <Proficiency name="Python" years="3" src={python}>
            Python is the very first programming language I learned. I started learning it when I was 15. Over the years I've been consistently using it for automating terminal tasks and once every while I'd work on an app using the kivy framework.
          </Proficiency>

          <Proficiency name="Ruby" years="1" src={ruby}>
            I learned ruby 2nd it is by far the language I enjoyed the most to use. Back when I learned it I was way more concerned about using languages that were popular and it being not that popular crushed my love for the language. 💔
          </Proficiency>

          <Proficiency name="Java" years="2" src={java}>
            I started learning java in my final year of highschool. The same year, I was introduced to LibGDX (a game development kit). The game dev basics I learned from LibGDX came in handy with Godot. Since then, I've also experimented with other JVM derivatives such as Kotlin and Groovy (which was my favorite of the JVM languages).
          </Proficiency>

          <Proficiency name="Javascript" years="2" src={javaScript}>
            I started learning javascript later in highschool, I believe, when I was 17. At that time I was very fascinated by the Qt framework and I used Javascript along with their QML language to make gui applications. Later on I moved to using it to create webpages (how surprising 😅) as well as to create mobile apps with React Native.
          </Proficiency>

          <Proficiency name="C#" years="1" src={cSharp}>
            This happens to be the latest languages I've learnt. I learnt it as part of my first year modules in university. I don't find it particularly interesting. I guess I like it's almost java like structure and syntax. 🤣
          </Proficiency>
        </div>
      </div>

    </Fragment>);
}

export default Proficiencies;