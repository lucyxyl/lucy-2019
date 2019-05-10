import React from 'react';

import Project1Protected from './Project1Protected';
import Project1Public from './Project1Public';
import ProtectedRoute from '../ProtectedRoute';

const Project1 = props => (
  <>
    <ProtectedRoute
      public={Project1Public}
      protected={Project1Protected}
      isAuthed={props.isAuthed}
      onAuthSuccess={props.onAuthSuccess}
    />
  </>
);

export default Project1;
