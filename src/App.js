import React, { Component } from "react";

class App extends Component {
  state = {
    timerActive: false,
    time: null,
    error: null
  };

  render() {
    return (
      <div>
        <h1>CODE BREAKER</h1>
        timer goes here
        <Timer time={this.state.time} />
      </div>
    );
  }
}

export default App;
