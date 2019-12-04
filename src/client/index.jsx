import React from "react";
import CodeMirror from "react-codemirror";

import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code:
`// Algo problem:
// create a function that adds 3 to 'n'

function Showdown() {

  function addThree(n) {
    // WRITE CODE BELOW AND




    
    // ABOVE THIS LINE ONLY
  }

  return addThree;
}

Showdown();
`
    };
    this.updateCode = this.updateCode.bind(this);
  }
  updateCode(newCode) {
    this.setState({ code: newCode });
  }

  render() {
    // value to options should fetch to the server and grab a random code question
    const options = {
      lineNumbers: true,
      mode: "javascript"
    };
    return (<div>
      <CodeMirror id="code" value={this.state.code} onChange={this.updateCode} options={options} />
      <button onClick={
        () => {
          const data = { ...this.state };
          // socket.emit( "i love testes", data );
          // console.log(data);
          // console.log(eval(data.code)(7));
          // console.log(eval(data.code)(7) === 10);
          const theFunction = eval(data.code);
          console.log('addThree(7) equals ' + theFunction(7));
        }
      }>CLICK ME</button>
    </div>);
  }
}

export default App;