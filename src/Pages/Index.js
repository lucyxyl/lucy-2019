import React from 'react';
import styled from 'styled-components';

import Work from '../Components/Work';
import Intro from '../Components/Intro';
import Divider from '../Components/Divider';
import FooterText from '../Components/FooterText';


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
}



const Content = styled.div`
  padding: 2em 20em;
`;



export default Index;