import React from 'react';
import { render } from 'react-dom';
import Dialogue from './components/dialogue-component';

const CHALLENGES = [
  {
    instructions: "Which CSS property would we use to italicize text?",
    code:
    optionList: [
      {
        id: 0,
        title: "text-decoration",
        order: 1
      },
      {
        id: 1,
        title: "font-style",
        order: 2
      },
      {
        id: 2,
        title: "text-transform",
        order: 3
      }
    ],
    preview: {
      css: (answer)=> {
        return ```
          .italicized {
            ${answer}: italic;
          }
        ```;
      },
      html: `
        <div class="italicized">This text has been italicized.</div>
      `
    }
  },
  {
    instructions: `
      <p>We want to create an element that has a blue box-shadow with a blur-radius of 2px. This shadow is also offset 1 pixel to the left and 4 pixels down.</p>
      <p>Click the elements to insert them in the correct order we'd use to write these style attributes.</p>
    `,
    optionList: [
      {
        id: 0,
        title: "-4px",
        order: 1
      },
      {
        id: 0,
        title: "blue",
        order: 3
      },
      {
        id: 0,
        title: "1px",
        order: 2
      },
      {
        id: 0,
        title: "2px",
        order: 4
      }
    ]
  }
];

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
          <h3>{this.props.instructions}</h3>
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
