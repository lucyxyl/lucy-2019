import React from 'react';
import styled from 'styled-components';
import Project1Intro from './Project-1-Intro';
import Password from '../Shared/Password';

const Project1Public = () => (
  <Content>
    <Project1Intro />
    <Password />
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

export default Project1Public;
