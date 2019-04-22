import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import About from '../About/About';
import Nibbles from '../Nibbles/Nibbles';

const FooterText = () => {
  return (
    <FooterTextWrap>
      <WidthLim>
        <FeatureText primary>
          Glad you stayed for the ride so far.
          <br />
          <br />
          Find out more about my journey, philosophy and my dog in
          <Link to="/about/">
            {' '}
            <WhiteLink>About</WhiteLink>
          </Link>
          . For other works, I've accumulated a collection of visual artifacts from my design works old and recent
          in
          <Link to="/nibbles/">
            {' '}
            <WhiteLink>Nibbles</WhiteLink>
          </Link>
          .
          <br />
          <br />
          <Quote>_s/he who has a why can bear any how</Quote>
        </FeatureText>
      </WidthLim>
      <Route path="/about/" component={About} />
      <Route path="/nibbles/" component={Nibbles} />
    </FooterTextWrap>
  );
};

const FooterTextWrap = styled.div`
  padding: 4em 0;
  background: #222226;
`;

const WidthLim = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const FeatureText = styled.p`
  background: ${props => (props.primary ? '#222226' : '#FFFFFF')};
  color: ${props => (props.primary ? '#FFFFFF' : '#222226')};
  font-size: 1.6em;
  line-height: 1.6em;
`;

const WhiteLink = styled.a`
  color: #fff;
  text-decoration: underline;
`;

const Quote = styled.span`
  font-family: minionItalic;
`;

export default FooterText;
