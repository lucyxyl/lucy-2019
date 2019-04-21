import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Project1Protected from '../Pages/Project1Protected';

const Password = () => (
  <Router>
    <Block>
      <SectionDivider>
        <SectionDividerBg> The story </SectionDividerBg>
      </SectionDivider>
    </Block>

    <InnerBlock>
      <h4> Enter password to read the rest, or reach out to xinyu.lin.lucy @gmail.com </h4> <Margin />
      <ion-icon size="large" name="md-key" />
      <Margin />
      <PasswordForm>
        <PasswordField placeholder="Password" type="password" />
        <EnterPassword>
          <Link to="/appneta-search/protected">
            <ProtectedLink>
              <ion-icon size="large" name="ios-arrow-round-forward" />
            </ProtectedLink>
          </Link>
        </EnterPassword>
      </PasswordForm>
      <Margin />
    </InnerBlock>

    <Route path="/appneta-search/protected" exact component={Project1Protected} />
  </Router>
);

const SectionDivider = styled.h6`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d0d0d0;
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

const SectionDividerBg = styled.span`
  background: #ffffff;
  padding: 0 1em;
`;
const InnerBlock = styled.div`
  width: 85%;
  margin: auto;
  text-align: center;
`;

const Margin = styled.div`
  margin: 2em 0;
`;

const Block = styled.div`
  margin: 4em 0;
`;

const PasswordForm = styled.form`
  display: flex;
  justify-content: center;
`;
const PasswordField = styled.input`
  max-width: 40%;
  background-color: #eaeaea;
  border-style: none;
  padding: 1em 1.5em;
  font-size: 1em;
  flex-grow: 2;
`;
const EnterPassword = styled.button`
  background-color: #eaeaea;
  border-style: none;
  padding: 1em 1em;
`;

const ProtectedLink = styled.a``;

export default Password;
