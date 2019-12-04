import React from "react";
import CodeMirror from "react-codemirror";

import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code:
        "// Algo problem:\n//create a function that adds 3 to 'n'\n// Type below\n\nfunction addThree(n) {\n\n}"
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
    return (
      <div>
        <CodeMirror
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
        />
        <button
          onClick={() => {
            const data = { ...this.state };
            //console.log(eval(data));
            // fetch("/code", {
            //   method: "POST",
            //   body: data
            // })
            //   .then(unparsed => unparsed.json)
            //   .then(response => {});
          }}
        >
          Submit Answer
        </button>
      </div>
    );
  }
}

export default App;
