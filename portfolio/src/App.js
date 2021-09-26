import './App.css';
import React, { Suspense } from 'react';
import { AppProvider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Helpers
import WaitForLoad from './Helpers/WaitForLoad';
import LoadingScreen from './Helpers/LoadingScreen';

// Components
import Navbar from './Nav-Banner/Navbar';
import Banner from './Nav-Banner/Banner';
import WebDev from './WebDev/WebDev';
import GameDev from './GameDev/GameDev';
import Footer from './Footer/Footer';

const PixelPortfolio = React.lazy(() => import('./ArtPorfolio/PixelPortfolio'));

function App() {
  return (
    <WaitForLoad>
      <Router>
        <AppProvider>
          <Navbar />
          <Banner />

          <Switch>
            <Route exact path="/">
              <WebDev />
            </Route>
            <Route path="/pixel">
              <Suspense fallback={<LoadingScreen />}>
                <PixelPortfolio></PixelPortfolio>
              </Suspense>
            </Route>
            <Route path="/game">
              <GameDev />
            </Route>
          </Switch>
          <Footer />
        </AppProvider>
      </Router>
    </WaitForLoad>
  );
}

export default App;
