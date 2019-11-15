import React, { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Jobs from './components/Jobs';
import Candidates from './components/Candidates';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/candidates">
              <Candidates />
            </Route>
            <Route path="/">
              <div><h2>Home Page</h2></div>
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
