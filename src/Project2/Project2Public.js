import React from 'react';
import styled from 'styled-components';
import Project2Intro from './Project-2-Intro';
import Password2 from '../Shared/Password-Project2';

const Project2Public = () => (
  <Content>
    <Project2Intro />
    <Password2 />
  </Content>
);

const Content = styled.div`
  width: 800px;
  margin: 2em auto;
`;

export default Project2Public;
