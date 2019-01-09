import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import LandingPage from './containers/LandingPage';
import ProjectsPage from './containers/ProjectsPage';
import AboutPage from './containers/AboutPage';
import ContactsPage from './containers/ContactsPage';
import Generator from './containers/Generator';
import ProjectDetailPage from './containers/ProjectDetailPage';
import { PROJECT_IDS } from './utils/constants';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="*/about" component={AboutPage} />
          <Route path="*/contacts" component={ContactsPage} />
          <Route exact path="*/projects" component={ProjectsPage} />
          
          <Route
            path="*/projects/:project" component={ProjectDetailPage}
          />

          <Route
            path="*/projects/portraits"
            render={() => <ProjectDetailPage project={PROJECT_IDS.PORTRAITS} />}
          />
          <Route
            path="*/projects/benches"
            render={() => <ProjectDetailPage project={PROJECT_IDS.BENCHES} />}
          />
          <Route
            path="*/projects/livemusic"
            render={() => <ProjectDetailPage project={PROJECT_IDS.LIVEMUSIC} />}
          />

          <Route path="*/generator" component={Generator} />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
