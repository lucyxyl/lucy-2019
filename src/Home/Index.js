import React from 'react';
import styled from 'styled-components';

import Work from './Work';
import Intro from './Intro';
import Divider from '../Shared/Divider';
import FooterText from './FooterText';

const Index = () => {
  return (
    <>
      <Content>
        <Intro />
        <Divider />
        <Work />
      </Content>
      <FooterText />
    </>
  );
};

const Content = styled.div`
  @media (min-width: 769px) {
    width: 80%;
    margin: 4em auto;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export default Index;
