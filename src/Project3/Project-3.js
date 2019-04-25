import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Project3Protected from './Project3Protected';
import Project3Public from './Project3Public';
import ScrollToTop from '../Shared/ScrollToTop';

const ScrollToTopConnected = withRouter(ScrollToTop);

const Project3 = () => (
  <Router>
    <ScrollToTopConnected>
      <>
        <Route path="/isi-ecosystem/" exact component={Project3Public} />
        <Route path="/isi-ecosystem/protected/" component={Project3Protected} />
      </>
    </ScrollToTopConnected>
  </Router>
);

export default Project3;
