import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Proficiencies from './components/Proficiencies';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-content">
        <About />
        <Proficiencies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
