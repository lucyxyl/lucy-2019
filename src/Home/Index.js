import React from 'react';
import styled from 'styled-components';

import Work from './Work';
import Intro from './Intro';
import Divider from '../Shared/Divider';
import FooterText from './FooterText';

const Index = () => {
  return (
    <div>
      <Content>
        <Intro />
        <Divider />
        <Work />
      </Content>
      <FooterText />
    </div>
  );
};

const Content = styled.div`
  width: 900px;
  margin: 0 auto;
`;

export default Index;
