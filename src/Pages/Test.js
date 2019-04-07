import React from 'react';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input:''
    };
  }
  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input 
        value = {this.state.input}
        onChange = {this.handleInput} />
              
        {
          this.state.input === '123' ? <div>You found me!</div> : <div>Nothing to see here</div>
        }
      </div> 
      );
  }
}

export default Test;