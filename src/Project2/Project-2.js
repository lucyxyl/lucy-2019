import React from 'react';
import { withRouter } from 'react-router';

import Project2Protected from './Project2Protected';
import Project2Public from './Project2Public';
import ScrollToTop from '../Shared/ScrollToTop';
import ProtectedRoute from '../ProtectedRoute';

const ScrollToTopConnected = withRouter(ScrollToTop);

const Project2 = props => (
  <ScrollToTopConnected>
    <>
      <ProtectedRoute public={Project2Public} protected={Project2Protected} isAuthed={props.isAuthed} />
    </>
  </ScrollToTopConnected>
);

export default Project2;
