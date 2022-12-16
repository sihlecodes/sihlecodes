import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Proficiencies from './components/Proficiencies';

import { Link } from 'react-scroll';

import './App.css';

function App() {
  const A = ({ target, children }) => <Link activeClass="active" smooth spy to={target}>{children}</Link>;

  return (
    <div className="App">
      <nav>
        <A target="about">About</A>
        <A target="proficiencies">Proficiencies</A>
        <A target="contact">Contact</A>
      </nav>

      <Header />

      <div className="App-content-area">
        <section id="about"><About /></section>
        <section id="proficiencies"><Proficiencies /></section>
      </div>

      <section id="contact" className='App-contact-section'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
