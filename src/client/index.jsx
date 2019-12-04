import React from "react";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    socket.emit('chat message', {
      theMessage: document.getElementById('m').value
    });
  }

  render() {
    return (
      <div>
        <textarea id='m' defaultValue={ph} style={{width: '200px', height: '200px'}}/>     <button className="submit" onClick={this.handleClick}>Click Me Pretty Please!</button>
      </div>
    );
  }
}

export default App;

var ph = `function Showdown() {
  function userCreated(val) {
    // add code here
    



    // return here

  }
  return userCreated;
}

Showdown();`