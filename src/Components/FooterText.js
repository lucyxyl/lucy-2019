import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import About from '../Pages/About';
import Nibbles from '../Pages/Nibbles';

const FooterText = () => {
  return (
    <FooterTextWrap>
      <FeatureText primary>
        Glad you stayed for the ride so far.
        <br/><br/>
        Find out more about my journey, philosophy and my dog in 
        <Link to="/about/"> <WhiteLink>About</WhiteLink></Link>. 
        For other works, I've accumulated a collection of visual artifacts from my design works old and recent in 
        <Link to="/nibbles/"> <WhiteLink>Nibbles</WhiteLink></Link>. 
        <br/><br/>
        <Quote>_s/he who has a why can bear any how</Quote>
      </FeatureText>
      <Route path="/about/" component={About} />
      <Route path="/nibbles/" component={Nibbles} />
    </FooterTextWrap>
    
  );
}

const FooterTextWrap = styled.div`
  padding: 4em 20em;
  background: #222226;
`;


const FeatureText = styled.p`
  background:${props => props.primary ? "#222226" : "#FFFFFF"};
	color: ${props => props.primary ? "#FFFFFF" : "#222226"};
  font-size: 1.6em;
  line-height: 1.6em;
`;

const WhiteLink = styled.a`
  color: #FFF;
  text-decoration: underline;
`;

const Quote = styled.span`
  font-family: minionItalic;
`;


export default FooterText;