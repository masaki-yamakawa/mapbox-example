import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomeReact from './pages/WelcomeReact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomeReact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
