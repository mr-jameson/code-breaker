import React, { Component } from "react";
import Timer from "./components/Timer";

class App extends Component {
  state = {
    timerActive: false,
    time: null,
    error: null
  };

  stopTimer = e => {
    e.preventDefault();

    this.setState({
      timerActive: false,
      time: null
    });
  };

  render() {
    const { timerActive, time } = this.state;
    return (
      <div>
        <h1>CODE BREAKER</h1>
        {timerActive && <Timer time={time} stopTimer={this.stopTimer} />}
      </div>
    );
  }
}

export default App;
