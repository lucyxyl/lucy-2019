import React from 'react';

const ProtectedRoute = props => {
  if (props.isAuthed) {
    return <props.protected {...props} />;
  } else {
    return <props.public {...props} />;
  }
};

export default ProtectedRoute;
