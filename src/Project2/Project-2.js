import React from 'react';

import Project2Protected from './Project2Protected';
import Project2Public from './Project2Public';
import ProtectedRoute from '../ProtectedRoute';

const Project2 = props => (
  <>
    <ProtectedRoute
      public={Project2Public}
      protected={Project2Protected}
      isAuthed={props.isAuthed}
      onAuthSuccess={props.onAuthSuccess}
    />
  </>
);

export default Project2;
