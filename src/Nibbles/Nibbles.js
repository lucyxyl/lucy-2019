import React from 'react';
import styled from 'styled-components';
import NibbleCard from './NibbleCard';

const Nibbles = () => {
  return (
    <>
      <Content>
        <section className="wrap">
          <SectionDivider>
            <SectionDividerBg>Nibbles</SectionDividerBg>
          </SectionDivider>
          <P center>A collection of visual artifacts from my past design works</P>
          <NibbleCard />
        </section>
      </Content>
    </>
  );
};

const Content = styled.div`
  @media (min-width: 769px) {
    width: 80%;
    margin: 4em auto;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 2em auto;
  }
`;

const SectionDivider = styled.h6`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d0d0d0;
  line-height: 0.1em;
`;

const SectionDividerBg = styled.span`
  background: #ffffff;
  padding: 0 1em;
`;

const P = styled.p`
  color: ${props => (props.dark ? '#FFFFFF' : '#48474C')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  padding: 2em 0;
`;

export default Nibbles;
