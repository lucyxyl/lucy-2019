import React from 'react';
import styled from 'styled-components';
import Project3Intro from './Project-3-Intro';
import Password3 from '../Shared/Password-Project3';

const Project2Public = props => (
  <Content>
    <Project3Intro />
    <Password3 onAuthSuccess={props.onAuthSuccess} />
  </Content>
);

const Content = styled.div`
  @media (min-width: 769px) {
    margin: 2em auto;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export default Project2Public;
