import React, {Component} from 'react';

class Blink extends Component {
  render () {
    return (
      <div>
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    );
  }
}

export default Blink;