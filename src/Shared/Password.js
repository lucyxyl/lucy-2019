import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import ScrollToTop from './ScrollToTop';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSecret: '',
    };
  }

  handleClick = () => {
    if(this.state.userSecret === 'broccoli') {
      this.props.onAuthSuccess();
    }
  };

  handleInput = event => {
    this.setState({
      userSecret: event.target.value,
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <ScrollToTop>
        <>
          <section className="wrap">
            <Block>
              <SectionDivider>
                <SectionDividerBg> The story </SectionDividerBg>
              </SectionDivider>
            </Block>
            <InnerBlock>
              <h4>
                {' '}
                Enter password to read the rest, or reach out to
                <br /> xinyu.lin.lucy@gmail.com{' '}
              </h4>{' '}
              <Margin />
              <ion-icon size="large" name="md-key" />
              <Margin />
              <PasswordForm onSubmit={this.onFormSubmit}>
                <PasswordField
                  placeholder="Password"
                  type="password"
                  value={this.state.userSecret}
                  onChange={this.handleInput}
                />
                <EnterPassword onClick={this.handleClick}>
                  <ion-icon size="large" name="ios-arrow-round-forward" />
                </EnterPassword>
              </PasswordForm>
              <Margin />
            </InnerBlock>
          </section>
        </>
      </ScrollToTop>
    );
  }
}

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
  @media (min-width: 320px) and (max-width: 768px) {
    max-width: 100%;
  }
`;
const EnterPassword = styled.button`
  background-color: #eaeaea;
  border-style: none;
  padding: 1em 1em;
`;

export default withRouter(Password);
