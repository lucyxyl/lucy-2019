import React from 'react';
import styled from 'styled-components';
import Test from './Test';

const Project2 = () => {
  return (
    <Content>
      <h1>Project 2</h1>
      <Test />
    </Content>
  );
}




const Content = styled.div`
  padding: 2em 20em;
  background: pink;
  height: 40em;
`; 





export default Project2;