import React from 'react';
import styled from 'styled-components';
import Project1Intro from '../Components/Project-1-Intro';
import Password from '../Components/Password';

const Project1 = () => {
  return (
    <Content>
      <Project1Intro />
      <Password />
    </Content>
  );
};

const Content = styled.div`
  width: 800px;
  margin: 4em auto;
`;

export default Project1;
