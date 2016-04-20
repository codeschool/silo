import React from 'react';
import { render } from 'react-dom';

const CHALLENGES = [
  {
    instructions: "Which CSS property would we use to italicize text?",
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
        id: 1,
        title: "blue",
        order: 3
      },
      {
        id: 2,
        title: "1px",
        order: 2
      },
      {
        id: 3,
        title: "2px",
        order: 4
      }
    ]
  }
];

const sortedOptions = (list) => list.sort((a, b) => a.order >= b.order);

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

class Answer extends React.Component {
  render() {
    return (<div>Box {this.props.order}</div>);
  }
}

class OptionList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.options.map((props) => {
            return (<Option key={props.id} {...props}></Option>)
          })}
        </ul>
      </div>
    );
  }
}

class AnswerList extends React.Component {
  render() {
    return (
      <div>
        {sortedOptions(this.props.options).map((o) => <Answer key={o.id} {...o} />)}
      </div>
    );
  }
}

class Challenge extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div className="challenge">
        <div className="question">
          <h3>{this.props.instructions}</h3>
        </div>
        <div className="answer">
          <AnswerList options={this.props.optionList}></AnswerList>
        </div>
        <div className="options">
          <OptionList options={this.props.optionList} />
        </div>
        <div className="dialogue">
          <Dialogue onContinue={this.props.onAdvance.bind(this)}/>
        </div>
      </div>);
  }
}

class Challenges extends React.Component {
  constructor() {
    super();
    this.challenges = CHALLENGES;
    this.state = {
      challengeIndex: 0,
      challengeLength: this.challenges.length
    };
  }

  onContinue() {
    let nextChallengeIndex = this.state.challengeIndex + 1;
    if (this.state.challengeIndex >= this.state.challengeLength) {
      nextChallengeIndex = 0;
    }
    this.setState({
      challengeIndex: nextChallengeIndex
    });
  }

  render() {
    return (
      <Challenge onAdvance={this.onContinue.bind(this)} {...this.challenges[this.state.challengeIndex]} />
    );
  }
}

render(
  <Challenges />,
  document.getElementById('app')
);
