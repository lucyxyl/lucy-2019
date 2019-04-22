import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Project1Protected from './Project1Protected';
import Project1Public from './Project1Public';
import ScrollToTop from '../Shared/ScrollToTop';

const ScrollToTopConnected = withRouter(ScrollToTop);

const Project1 = () => (
  <Router>
    <ScrollToTopConnected>
      <>
        <Route path="/appneta-search/" exact component={Project1Public} />
        <Route path="/appneta-search/protected/" component={Project1Protected} />
      </>
    </ScrollToTopConnected>
  </Router>
);

export default Project1;
