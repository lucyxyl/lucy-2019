import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import logow from './logo-w.svg';
import inlogo from './in-logo.svg';

import Work from './Work';
import Intro from './Intro';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav>
          <Menu>
              <Logo>
                <a href="/">
                  <img src={logo} alt="logo"/>
                </a>
              </Logo>
              <Page><a href="/">work</a></Page>
              <Page><a href="/">nibbles</a></Page>
              <Page><a href="/">about</a></Page>
          </Menu>
        </Nav>


        <Content>
          <Intro />
          <Work />
        </Content>


        <Footer>
          <FooterWrapper>
            <FooterTextWrap>
              <FeatureText primary>
                Glad you stayed for the ride so far.
                <br/><br/>
                Find out more about my journey, philosophy and my dog in the About section. 
                Of course, if you want a nice TLDR, feel free to visit my resume.
              </FeatureText>
            </FooterTextWrap>
              
            <FooterBar>
             <FooterElement>
                <img src={logow} alt="light logo"/>
              </FooterElement>
              <FooterElement>
                <a href="https://github.com/lucyxyl/lucy-2019" target="_blank">
                  <FeatureText primary>Design & Code by Lucy.</FeatureText>
                </a>
              </FooterElement>
              <FooterElement>
                <a href="https://www.linkedin.com/in/lucyxylin/" target="_blank">
                  <img src={inlogo} alt="linkedin logo"/>
                </a>
              </FooterElement>
            </FooterBar>
            
          </FooterWrapper>
        </Footer>

      </div>
    );
  }
}

const Nav = styled.nav`
  padding: 2em 20em;
  // box-shadow: 0 2px 2px #EEEEEE;
`; 

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Logo = styled.li`
  margin-right: auto;
`;

const Page = styled.li`
  padding: 0.24em 1em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2em;
`;

const Content = styled.div`
  // height: 20em;
  // background: pink;
`;

const Footer = styled.div`
  background: #222226;

`;

const FooterWrapper = styled.div`
  padding: 4em 20em;

`;

const FooterBar = styled.ul`
  color: #FFFFFF;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

const FooterElement = styled.li`
  
`;

const FooterTextWrap = styled.div`
  padding-bottom: 4em;

`;


const FeatureText = styled.p`
  background:${props => props.primary ? "#222226" : "#FFFFFF"};
	color: ${props => props.primary ? "#FFFFFF" : "#222226"};
  font-size: 1.6em;
  line-height: 1.6em;
`;


export default App;
