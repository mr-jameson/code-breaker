import React, { Component } from "react";

class App extends Component {
  state = {
    timerActive: false,
    time: null,
    error: null
  };

  stopTimer = () => {
    this.setState({
      timerActive: false,
      time: null
    });
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>CODE BREAKER</h1>
        timer goes here
        <Timer time={time} stopTimer={this.stopTimer} />
      </div>
    );
  }
}

export default App;
