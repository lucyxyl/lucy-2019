import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router';

class Password3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSecret: '',
    };
  }

  handleClick = () => {
    axios
      .get(`/authenticate.php?secret=${this.state.userSecret}`)
      .then(response => {
        if (response.data === true) {
          this.props.history.push('/isi-salescontent/protected/');
        }
      })
      .catch(error => console.log(error));
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
      <div>
        <Block>
          <SectionDivider>
            <SectionDividerBg> The story </SectionDividerBg>
          </SectionDivider>
        </Block>
        <InnerBlock>
          <h4>
            {' '}
            Enter password to read the rest, or reach out to <br />
            xinyu.lin.lucy @gmail.com{' '}
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
      </div>
    );
  }
}

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

export default withRouter(Password3);
