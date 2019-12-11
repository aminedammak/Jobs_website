import React, { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobsList from './components/JobsList';
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
              <JobsList />
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
