import React from 'react';
import styled from 'styled-components';


const SidebySide = props => (
 
  <SidebySideContainer>
    <LeftSide>
      <Image src={props.image} alt="Intro demo" />
    </LeftSide>
    <RightSide>
      <h3>{props.title}</h3>
      <SideP>{props.details}</SideP>
    </RightSide>
  </SidebySideContainer>
);

const SidebySideContainer = styled.div`
  position: relative;
  display: flex;
  margin: 4em auto;
`; 
const LeftSide = styled.div`
  flex: 1;
  margin-right: 2em;

`; 
const RightSide = styled.div`
  align-self: center;
  flex: 1;
  margin-left: 2em;
`; 
const Image = styled.img`
  width: 100%;
`; 

const SideP = styled.p`
  font-size: 1.3em;
`; 




export default SidebySide;