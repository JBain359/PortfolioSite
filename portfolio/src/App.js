import './App.css';
import React, { Suspense } from 'react';
import { AppProvider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './Nav-Banner/Navbar';
import Banner from './Nav-Banner/Banner';
import WebDev from './WebDev/WebDev';
import ScreenData from './Helpers/ScreenData';
import WaitForLoad from './Helpers/WaitForLoad';
const PixelPortfolio = React.lazy(() => import('./ArtPorfolio/PixelPortfolio'));

function App() {
  return (
    <WaitForLoad>
      <Router>
        <AppProvider>
          <Navbar></Navbar>
          <Banner></Banner>

          <Switch>
            <Route exact path="/">
              <WebDev></WebDev>
            </Route>
            <Route path="/pixel">
              <Suspense fallback={<div>Loading...</div>}>
                <PixelPortfolio></PixelPortfolio>
              </Suspense>
            </Route>
          </Switch>
          <ScreenData></ScreenData>
        </AppProvider>
      </Router>
    </WaitForLoad>
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
