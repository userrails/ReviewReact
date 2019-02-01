import React, {Component} from 'react';

class Blink extends Component {
  render () {
    return (
      <div>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Blink;