// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import Goat from './components/goat-component';
import Dialogue from './components/dialogue-component';

class App extends React.Component {
  
  renderDialogue() {
    return <Dialogue />;
  }
  
  render() {
    return (
      <div>I heard React was good. <Goat />
      {this.renderDialogue()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
