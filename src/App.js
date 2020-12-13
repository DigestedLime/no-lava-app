import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import NewGamePage from './NewGamePage.js';
import JoinGamePage from './JoinGamePage.js';
import Main from './components/Main.js';
import {
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";

export default function App() {
    
    return (
      <Router>
        <Switch>
          <Route path="/newGame">
            <NewGamePage />
          </Route>
          <Route path="/joinGame">
            <JoinGamePage />
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
     
    </Router>
      
    );
      
  }

