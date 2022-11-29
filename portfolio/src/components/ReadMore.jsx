import { useRef } from 'react';
import { useState } from 'react';
import './ReadMore.css';

function ReadMore({ children, toggle = true }) {
  const toggleElement = useRef();
  const [reading, setReading] = useState(false);

  const toggleReading = () => {
    setReading(!reading);

    if(!toggle)
      toggleElement.current.style.display = "none";
  }

  return (
    <div className="ReadMore ">
      {reading ? children : ""}

      <span className="ReadMore-toggle" ref={toggleElement} onClick={toggleReading}>
        read { reading ? "less" : "more" }
      </span>
    </div>
  );
}

export default ReadMore; 