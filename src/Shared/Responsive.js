import React from 'react';
import styled from 'styled-components';

// this component will demo the home page on mobile

const MobileHome = () => {
  return <MobileMsg>Nothing to See</MobileMsg>;
};

const MobileMsg = styled.div`
  @media (min-width: 768px) {
    background: pink;
  }
  @media (min-width: 992px) {
    background: pink;
  }
`;
