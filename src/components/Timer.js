import React, { Component } from "react";
import format from "format-duration";

let timer;

class Timer extends Component {
  componentDidMount() {
    timer = setInterval(this.props.countdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  render() {
    const { time, stopTimer } = this.props;

    return (
      <>
        <span>{format(time * 1000)}</span>
        <button onClick={stopTimer}>Stop</button>
      </>
    );
  }
}

export default Timer;
