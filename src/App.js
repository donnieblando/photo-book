import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import LandingPage from './containers/LandingPage';
import ProjectsPage from './containers/ProjectsPage';
import AboutPage from './containers/AboutPage';
import Generator from './containers/Generator';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="*/about" component={AboutPage} />
          <Route path="*/projects/:project" component={ProjectsPage} />

          <Route path="*/generator" component={Generator} />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
