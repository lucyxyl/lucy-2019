import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


// const Protected = () => <h3>Protected</h3>;

class Enter extends React.Component {
  render() {
    return (
      <div>
        <form>
          Password <br/>
          <input type = 'password' name='pwd' />
          <input type = 'submit' />
        </form>
      </div>
    )
  }
}

class ProtectedProject extends Component {
  render() {
    return (
      <Router>
        <div>
          <h4>
            Enter password to read the rest, or reach out to xinyu.lin.lucy@gmail.com
          </h4>
          <ul>
            <li><Link to ='/appneta-search-protected'>Protected Page</Link></li>
          </ul>

          <Route path = '/appneta-search-enter' component = {Enter} />
        </div>
      </Router>
    )
  }
}


export default ProtectedProject;