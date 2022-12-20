import logo from './logo.svg';
import './public/stylesheets/index.css';
import Landing from './component/Landing';
import Clients from './component/Clients';
import Education from './component/Education';
import { useState, useEffect } from 'react';
import Experience from './component/Experience';

function App() {

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div className="App">
      <Landing />
      <Clients scrollPosition={scrollPosition}/>
      <Education scrollPosition={scrollPosition}/>
      <Experience scrollPosition={scrollPosition}/>
    </div>
  );
}

export default App;
