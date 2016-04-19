import React from 'react';

class Dialogue extends React.Component {
  
  constructor(){
    super();
    this.state = {
    };
  }
  
  render() {
    return(
      <div>
        <div>Success!</div>
        <button onClick={this.props.onContinue.bind(this)}>Continue</button>
      </div>
    );
  }
}

export default Dialogue;
