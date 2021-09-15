import './App.css';
import { AppProvider } from './context';

// Components
import Navbar from './Navbar';
import Banner from './Banner';
import Info from './Info';
import ScreenData from './ScreenData';
import AboutCard from './AboutCard';

function App() {
  return (
    <AppProvider>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutCard></AboutCard>
      <Info></Info>
      <ScreenData></ScreenData>
    </AppProvider>
  );
}

function BoilerPlate() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
