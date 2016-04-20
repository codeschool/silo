import React from 'react';
import { render } from 'react-dom';

const CHALLENGES = [
  {
    title: "Here is a question title",
    optionList: [
      {
        id: 0,
        title: "First",
        order: 1
      },
      {
        id: 1,
        title: "Second",
        order: 2
      },
      {
        id: 2,
        title: "Third",
        order: 3
      },
      {
        id: 3,
        title: "Forth",
        order: 4
      }
    ]
  }
];

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

class Option extends React.Component {
  render() {
    return (<li>{this.props.title}</li>);
  }
}

class OptionList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.options.map((props) => {
            return (<Option {...props}></Option>)
          })}
        </ul>
      </div>
    );
  }
}

class Challenge extends React.Component {
  constructor({ optionList }) {
    super();
    const sortedOptions = optionList.sort((a, b) => a.order >= b.order);
    this.state = { sortedOptions } ;
  }
  render () {
    return (
      <div className="challenge">
        <div className="question">
          <h3>{this.props.title}</h3>
        </div>
        <div className="answer">
          <div>
            {this.state.sortedOptions.map((o) => <div>BOX {o.order}</div>)}
          </div>
        </div>
        <div className="options">
          <OptionList options={this.props.optionList} />
        </div>
      </div>);
  }
}

class Challenges extends React.Component {
  constructor() {
    super();
    this.challenges = CHALLENGES;
    this.state = {
      challengeIndex: 0
    };
  }
  continueClickCallback() {
    this.state.challengeIndex++;
    alert(this.state.challengeIndex);
  }

  render() {
    return (
      <div>
        <Challenge {...this.challenges[this.state.challengeIndex]} />
        <Dialogue onContinue={this.continueClickCallback.bind(this)}/>
      </div>
    );
  }
}

render(
  <Challenges />,
  document.getElementById('app')
);
