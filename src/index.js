import React from 'react';
import { render } from 'react-dom';
import Dialogue from './components/dialogue-component';

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
        <div className="italicized">This text has been italicized.</div>
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

class App extends React.Component {
    render(){
      return (<div>
          <NavBar />
          <Container />
        </div>);
    }
}

class Container extends React.Component {
  render(){
    return (<div>

      <div className='container'>
        <div className='information'>
          <p><span className="label label-default">CSS</span></p>

          <p>We want to create an element that has a blue
            <code>box-shadow</code> with a <code>blur-radius</code> of <code>2px</code>.
            This shadow is also offset 1 pixel to the left and 4 pixels down.</p>

          <p>Drag and drop the elements into the correct order wed use to write
            these style attributes.</p>
        </div>

        <div className='answer'>
          <p className='lead pull-left'>box-shadow:</p>

          <ul className='list-inline answer-list  pull-left'>
            <li className='answer-list--filled label label-info'>
              <a href='#'><code>-4px</code></a>
            </li>
            <li className='answer-list--filled label label-info'>
              <a href='#'><code>1px</code></a>
            </li>
            <li className='answer-list--unfilled label label-info'><a href='#'><code>&nbsp;</code></a></li>
            <li className='answer-list--unfilled label label-info'><a href='#'><code>&nbsp;</code></a></li>
          </ul>
          <div className='clearfix'></div>
        </div>

        <ul className='list-unstyled option-list list-inline'>
          <li className='option--used list-inline-item'><a href='#' className='label label-info'><code>-4px</code></a></li>
          <li className='list-inline-item'><a href='#' className='label label-info'><code>-2px</code></a></li>
          <li className='list-inline-item'><a href='#' className='label label-info'><code>2px</code></a></li>
          <li className='option--used list-inline-item'><a href='#' className='label label-info'><code>1px</code></a></li>
        </ul>
      </div>

    </div>);
  }
}

class NavBar extends React.Component {
  render(){
    return (<div>
    <nav className="navbar">
      <a className="navbar-brand" href="#">Silo</a>

      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item complete">
          <a href='#' className="nav-link">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
          </a>
        </li>

        <li className="nav-item complete">
          <a href='#' className="nav-link">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
          </a>
        </li>

        <li className="nav-item complete">
          <a href='#' className="nav-link">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
          </a>
        </li>

        <li className="nav-item incomplete">
          <a href='#' className="nav-link">
            <i className="fa fa-circle-o" aria-hidden="true"></i>
          </a>
        </li>

        <li className="nav-item active">
          <a href='#' className="nav-link">
            <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href='#' className="nav-link">
            <i className="fa fa-circle-o" aria-hidden="true"></i>
          </a>
        </li>

        <li className="nav-item">
          <a href='#' className="nav-link">
            <i className="fa fa-circle-o" aria-hidden="true"></i>
          </a>
        </li>

        <li className="nav-item">
          <a href='#' className="nav-link">
            <i className="fa fa-circle-o" aria-hidden="true"></i>
          </a>
        </li>

        <li className="nav-item">
          <a href='#' className="nav-link">
            <i className="fa fa-circle-o" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>);
  }
}

render(
  <App />,
  document.getElementById('app')
);
