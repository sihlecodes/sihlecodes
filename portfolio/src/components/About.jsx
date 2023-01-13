import React from 'react'

import resume from '../assets/CV.pdf';
import me from '../assets/candidate1.png';

import './About.scss';

export const AboutIconLink = ({ href, src, alt, label }) => (
  <a className="About-icon-link" href={href}>
    <img alt={alt} src={src} />
    <p>{label}</p>
  </a>
);

function About() {
  return (
    <div className="About-content App-text-content">
      <div className="About-main">
        <div className="story">
          <h3>My Story</h3>
          <div>
            <p>Ever since I was young I always new I wanted to do something related to technology; I found tech fascinating.</p>

            <p>
              When I was in high school, at age 15, I became curious about programming but IT wasn’t offered as a subject at my school so, I set out to teach myself. Initially, I thought that programming was all about numbers and binary, but I quickly realized that wasn’t the case. So, I went back to the drawing board and did some actual research on how programming is actually done. In the process, I discovered python: the language that introduced me to the programming world.</p>
            <p>
              After lots and lots of confusion and frustration, it all just <i>clicked</i> and I fell in love with programming. I know this sounds totally cliché but, from then I knew,  I’d be programming for the rest of my life. Till this day, I feel a strange and deep connection with programming: it fulfills me.
            </p>
            <p>
              <i>Deciding to learn programming was and still is the best decision I’ve ever made.</i>
            </p>
          </div>

          <h3>My Vision</h3>

          <p>Ultimately, I believe <i>my purpose in life is making people’s lives easier through technological means.</i> Unfortunately, It’s not exactly clear to me how I’ll make that work, just yet.</p>
          <p>So for now, I’m focused more focused on my studies and on sharing some of the knowledge I’ve accumulated, over the years, about programming.</p>
        </div>

        <div className="About-side">
          <img id="me" width="400" src={me} alt="" />
          <p>
            I’m passionate programmer and problem solver. At the moment, I'm really into graphic design. I enjoy creating art, solving problems, and learning new skills, amongst other things.
          </p>
          <ul className="About-values">
            <li>Honesty</li>
            <li>Innovation</li>
            <li>Growth</li>
            <li>Passion</li>
            <li>Reliability</li>
          </ul>
          <a className="App-button" href={resume} download="Curriculum Vitae">Download Resume</a>
        </div>
      </div>
    </div>
  )
}

export default About