import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import ScrollToTop from './Shared/ScrollToTop';
import logo from './Image/logo.svg';
import NavCTA from './Image/NavCTA.svg';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      pAuthed: false,
    };
  }

  onAuthSuccess = () => {
    this.setState({
      pAuthed: true,
    });
  };

  navToggler = () => {
    this.setState({
      active: !this.state.active,
    });
  };
  render() {
    return (
      <Router>
        <ScrollToTopConnected>
          <>
            <nav id="nav-desktop">
              <div id="nav-logo">
                <a href="/">
                  <img src={logo} id="logo" alt="logo" />
                </a>
              </div>
              <ul id="nav-desktop-list">
                <Link to="/">
                  <li>work</li>
                </Link>
                <Link to="/nibbles">
                  <li>nibbles</li>
                </Link>
                <Link to="/about">
                  <li>about</li>
                </Link>
              </ul>
            </nav>
            <nav id="nav-mobile">
              <ul id="nav-mobile-wrap">
                <li id="nav-logo">
                  <a href="/">
                    <img src={logo} id="logo" alt="logo" />
                  </a>
                </li>
                <li id="nav-mobile-menu-cta">
                  <button onClick={this.navToggler}>
                    <img src={NavCTA} id="menu-cta" alt="hamburger menu" />
                  </button>
                </li>
              </ul>
              <NavMobileList active={this.state.active}>
                <Link to="/" onClick={this.navToggler}>
                  <li>work</li>
                </Link>
                <Link to="/nibbles" onClick={this.navToggler}>
                  <li>nibbles</li>
                </Link>
                <Link to="/about" onClick={this.navToggler}>
                  <li>about</li>
                </Link>
              </NavMobileList>
            </nav>
            <Route exact path="/" component={Index} />
            <Route exact path="/nibbles" component={Nibbles} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/appneta-search"
              render={props => <Project1 isAuthed={this.state.pAuthed} onAuthSuccess={this.onAuthSuccess} />}
            />
            <Route
              exact
              path="/isi-salescontent"
              render={props => <Project2 isAuthed={this.state.pAuthed} onAuthSuccess={this.onAuthSuccess} />}
            />
            <Route
              exact
              path="/isi-ecosystem"
              render={props => <Project3 isAuthed={this.state.pAuthed} onAuthSuccess={this.onAuthSuccess} />}
            />
            <Footer>
              <FooterBar>
                <FooterItems>
                  <Image src={logow} alt="light logo" />
                </FooterItems>
                <FooterItems>
                  <FeatureText primary>Design & Code by Lucy.</FeatureText>
                </FooterItems>
                <FooterItems>
                  <a href="https://www.linkedin.com/in/lucyxylin" target="_blank" rel="noopener noreferrer">
                    <Image src={inlogo} alt="linkedin logo" />
                  </a>
                </FooterItems>
              </FooterBar>
            </Footer>
          </>
        </ScrollToTopConnected>
      </Router>
    );
  }
}
const Image = styled.img`
  width: 100%;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 80%;
  }
`;
const NavMobileList = styled.ul`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #f8e71c;
  position: absolute;
  width: 90%;
  z-index: 1;
  height: 100%;
  transition-duration: 3s;

  li {
    padding: 1em 0;
    font-family: 'Hind', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.2em;
  }
`;

const Footer = styled.div`
  background: #222226;
  padding: 2em 0 1em 0;
`;

const FooterBar = styled.ul`
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 2em auto;
  list-style-type: none;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 90%;
    flex-direction: column;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    width: 90%;
  }
`;

const FooterItems = styled.li`
  padding: 1em 0;
  align-self: center;
`;

const FeatureText = styled.p`
  background: ${props => (props.primary ? '#222226' : '#FFFFFF')};
  color: ${props => (props.primary ? '#FFFFFF' : '#222226')};
  font-size: 1.6em;
  line-height: 1.6em;
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.4em;
  }
`;

export default App;
