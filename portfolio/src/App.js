import logo from './logo.svg';
import './App.css';

// Components
import Navbar from './Navbar';
import Banner from './Banner';
import Info from './Info';
import ScreenData from './ScreenData';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <ScreenData></ScreenData>
    </>
  );
}

function BoilerPlate() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
