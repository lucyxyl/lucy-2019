import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import ScrollToTop from './Shared/ScrollToTop';
import logo from './Image/logo.svg';
import logow from './Image/logo-w.svg';
import inlogo from './Image/in-logo.svg';
import Nibbles from './Nibbles/Nibbles';
import About from './About/About';
import Index from './Home/Index';
import Project1 from './Project1/Project-1';
import Project2 from './Project2/Project-2';
import Project3 from './Project3/Project-3';

import './App.css';

const ScrollToTopConnected = withRouter(ScrollToTop);

const App = () => (
  <Router>
    <ScrollToTopConnected>
      <div>
        <Nav>
          <Menu>
            <Logo>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Logo>
            <Page>
              <Link to="/">work</Link>
            </Page>
            <Page>
              <Link to="/nibbles/">nibbles</Link>
            </Page>
            <Page last>
              <Link to="/about/">about</Link>
            </Page>
          </Menu>
        </Nav>

        <Route path="/" exact component={Index} />
        <Route path="/nibbles/" component={Nibbles} />
        <Route path="/about/" component={About} />
        <Route path="/appneta-search/" component={Project1} />
        <Route path="/appneta-visualization/" component={Project2} />
        <Route path="/intuitive-ecosystem/" component={Project3} />
        {/* <Route path="/intuitive-sales-content/" component={Project4} />
      <Route path="/scad-accessibility/" component={Project5} /> */}

        <Footer>
          <FooterBar>
            <FooterElement>
              <img src={logow} alt="light logo" />
            </FooterElement>
            <FooterElement>
              {/* <a href="https://github.com/lucyxyl/lucy-2019" target="_blank"> */}
              <FeatureText primary>Design & Code by Lucy.</FeatureText>
              {/* </a> */}
            </FooterElement>
            <FooterElement>
              <a href="https://www.linkedin.com/in/lucyxylin/" target="_blank">
                <img src={inlogo} alt="linkedin logo" />
              </a>
            </FooterElement>
          </FooterBar>
        </Footer>
      </div>
    </ScrollToTopConnected>
  </Router>
);

const Nav = styled.nav`
  padding: 2em 0;
  width: 60%;
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Logo = styled.li`
  margin-right: auto;
`;

const Page = styled.li`
  padding: ${props => (props.last ? '0.24em 0 0.24em 1em' : '0.24em 1em')};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2em;
`;

const Footer = styled.div`
  background: #222226;
  padding: 4em 0;
`;

const FooterBar = styled.ul`
  color: #ffffff;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
`;

const FeatureText = styled.p`
  background: ${props => (props.primary ? '#222226' : '#FFFFFF')};
  color: ${props => (props.primary ? '#FFFFFF' : '#222226')};
  font-size: 1.6em;
  line-height: 1.6em;
`;

const FooterElement = styled.li``;

export default App;
