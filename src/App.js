import React, { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import JobsList from './components/JobsList';
import JobDetails from './components/JobDetails';
import Candidates from './components/CandidatesList';
import { Container } from 'react-bootstrap';
import PostAJob from './components/PostAJob';
import SubmitResume from './components/SubmitResume';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/jobs">
              <JobsList />
            </Route>
            <Route path="/jobs/:id">
              <JobDetails />
            </Route>
            <Route path="/candidates">
              <Candidates />
            </Route>
            <Route exact path="/post-a-job">
              <PostAJob />
            </Route>
            <Route path="/post-a-job/:id">
              <PostAJob />
            </Route>
            <Route path="/submit-resume">
              <SubmitResume />
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
