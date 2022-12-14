import React, { Fragment } from 'react'
import ReadMore from './ReadMore';

import itchIcon from '../assets/itch-io.svg';
import githubIcon from '../assets/github.svg';
import instagramIcon from '../assets/instagram.svg';

import './About.css';

function AboutIconLink({ href, src, alt, label }) {
  return (
    <a className="About-icon-link" href={href}>
      <img alt={alt} src={src} />
      <p>{label}</p>
    </a>
  );
}

function About() {
  return (
    <Fragment>
      <h2>About</h2>

      <div className="About-content">
        <p>
          I am a Self-driven, hardworking, and dependable individual. I enjoy problem solving, programming, and
          learning new skills.
        </p>

        <h3>My Story</h3>
        <div>
          <p>Ever since I was young I always new I wanted to do something related to technology; I found tech fascinating.</p>
          {/* <ReadMore> */}
            <p>
              When I was in high school, at age 15, I became curious about programming but IT wasn’t offered as a subject at my school so I set out to teach myself. Initially, I thought that programming was all about numbers and binary, but quickly realized that wasn’t the case. So I went back to the drawing board and did some actual research on how programming is actually done. In the process, I discovered python: the language that introduced me to the programming world.</p>
            <p>
              Despite all the confusion and frustration in the beginning, I fell in love. I knew that this is something I want to do for the rest of my life. Till this day, I feel a strange and deep connection with programming: it fulfills me.
            </p>
            <p>
              <i>Deciding to learn programming is the best decision I’ve ever made.</i>
            </p>
          {/* </ReadMore> */}
        </div>

        <h3>My Vision</h3>

        <p>Ultimately, I believe <i>my purpose in life is making people’s lives easier through technological means.</i> Unfortunately, It’s not exactly clear to me, just yet, how I’ll make that work.</p>

        <p>So for now, I want to focus on my studies in University. Along the way also I want to offer my assistance to at least a handful of people and help them realize their own love for programming.</p>

        <h3>Check out some of my work</h3>
        <p>A quick word of warning: I haven't used my instagram for a while. 😅</p>

        <div className="About-icon-links">
          <AboutIconLink src={githubIcon} href="https://github.com/sihlecodes" label="Github" />
          <AboutIconLink src={itchIcon} href="https://sihlecodes.itch.io" label="Itch.io" />
          <AboutIconLink src={instagramIcon} href="https://instagram.com/sihlecodes" label="Instagram" />
        </div>
      </div>
    </Fragment>
  )
}

export default About