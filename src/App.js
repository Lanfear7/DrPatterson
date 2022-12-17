import logo from './logo.svg';
import './public/stylesheets/index.css';
import Landing from './component/Landing';
import Clients from './component/Clients';

function App() {
  return (
    <div className="App">
      <Landing />
      <Clients />
    </div>
  );
}

export default App;
