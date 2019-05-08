import React from 'react';
import { withRouter } from 'react-router';

import Project3Protected from './Project3Protected';
import Project3Public from './Project3Public';
import ScrollToTop from '../Shared/ScrollToTop';
import ProtectedRoute from '../ProtectedRoute';

const ScrollToTopConnected = withRouter(ScrollToTop);

const Project3 = props => (
  <ScrollToTopConnected>
    <>
      <ProtectedRoute public={Project3Public} protected={Project3Protected} isAuthed={props.isAuthed} />
    </>
  </ScrollToTopConnected>
);

export default Project3;
