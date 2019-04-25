import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Project2Protected from './Project2Protected';
import Project2Public from './Project2Public';
import ScrollToTop from '../Shared/ScrollToTop';

const ScrollToTopConnected = withRouter(ScrollToTop);

const Project2 = () => (
  <Router>
    <ScrollToTopConnected>
      <>
        <Route path="/isi-salescontent/" exact component={Project2Public} />
        <Route path="/isi-salescontent/protected/" component={Project2Protected} />
      </>
    </ScrollToTopConnected>
  </Router>
);

export default Project2;
