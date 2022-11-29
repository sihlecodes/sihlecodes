import React, { Fragment } from 'react'

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