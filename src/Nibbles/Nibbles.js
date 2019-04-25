import React from 'react';
import styled from 'styled-components';
import NibbleCard from './NibbleCard';

const Nibbles = () => {
  return (
    <Content>
      <SectionDivider>
        <SectionDividerBg>Nibbles</SectionDividerBg>
      </SectionDivider>
      <P center>A collection of visual artifacts from my past design works</P>
      <NibbleCard />
    </Content>
  );
};

const Content = styled.div`
  width: 1000px;
  margin: 4em auto;
`;

const SectionDivider = styled.h6`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d0d0d0;
  line-height: 0.1em;
  margin: 10px 0 2em 20px;
`;

const SectionDividerBg = styled.span`
  background: #ffffff;
  padding: 0 1em;
`;

const P = styled.p`
  color: ${props => (props.dark ? '#FFFFFF' : '#48474C')};
  font-size: 1.4em;
  text-align: ${props => (props.center ? 'center' : 'left')};
  padding: 2em 0;
`;

export default Nibbles;
