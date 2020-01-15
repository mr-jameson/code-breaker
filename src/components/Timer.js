import React, { Component } from "react";

class Timer extends Component {
  
  componentDidMount () {
    setInterval(this.props.countdown, 1000);
  }

  render() {
    const { time, stopTimer } = this.props;

    return (
      <>
        <span>{time}</span>
        <button onClick={stopTimer}>Stop</button>
      </>
    )
  }
}

export default Timer