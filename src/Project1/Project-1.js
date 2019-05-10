import React from 'react';
import { withRouter } from 'react-router';

import Project1Protected from './Project1Protected';
import Project1Public from './Project1Public';
import ScrollToTop from '../Shared/ScrollToTop';
import ProtectedRoute from '../ProtectedRoute';

const ScrollToTopConnected = withRouter(ScrollToTop);

const Project1 = props => (
  <ScrollToTopConnected>
    <>
      <ProtectedRoute
        public={Project1Public}
        protected={Project1Protected}
        isAuthed={props.isAuthed}
        onAuthSuccess={props.onAuthSuccess}
      />
    </>
  </ScrollToTopConnected>
);

export default Project1;
