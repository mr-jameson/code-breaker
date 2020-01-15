import React, { Component } from "react";
import Timer from "./components/Timer";

class App extends Component {
  state = {
    timerActive: true,
    time: 6,
    error: null
  };


  countdown = () => {

    const {time } = this.state
    if (time === 0) {
      this.stopTimer()
      alert("time to take a break")
    } else {

      this.setState(state => {

        return {
        
          time: state.time - 1
        }
      })

    }
  }

  stopTimer = e => {
    if (e) e.preventDefault();

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
        {timerActive && <Timer time={time} stopTimer={this.stopTimer} countdown={this.countdown}/>}
      </div>
    );
  }
}

export default App;
