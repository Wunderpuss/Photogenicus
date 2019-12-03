import React from 'react';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    socket.emit('sayHello');
  }

  render() {
    return (
      <div>
        <button className="submit" onClick={this.handleClick}>Click Me Pretty Please!</button>
      </div>
    );
  }
}

export default App; 