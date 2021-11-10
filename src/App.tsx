import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mapbox from './pages/Mapbox';
import WelcomeReact from './pages/WelcomeReact';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './pages/Map.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomeReact} />
        <Route exact path="/mapbox" component={Mapbox} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
