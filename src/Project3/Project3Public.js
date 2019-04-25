import React from 'react';
import styled from 'styled-components';
import Project3Intro from './Project-3-Intro';
import Password3 from '../Shared/Password-Project3';

const Project2Public = () => (
  <Content>
    <Project3Intro />
    <Password3 />
  </Content>
);

const Content = styled.div`
  width: 800px;
  margin: 2em auto;
`;

export default Project2Public;
