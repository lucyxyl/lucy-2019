import React from 'react';

import Project3Protected from './Project3Protected';
import Project3Public from './Project3Public';
import ProtectedRoute from '../ProtectedRoute';

const Project3 = props => (
  <>
    <ProtectedRoute
      public={Project3Public}
      protected={Project3Protected}
      isAuthed={props.isAuthed}
      onAuthSuccess={props.onAuthSuccess}
    />
  </>
);

export default Project3;
