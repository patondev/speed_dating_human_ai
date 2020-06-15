import React from "react";

import { StageTimeWrapper } from "meteor/empirica:core";

import Timer from "./Timer.jsx";

class timer extends React.Component {
  startTimer = () => {
    const { remainingSeconds } = this.props;
    const timer = remainingSeconds;
    let minutes;
    let seconds;
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  };

  render() {
    const { remainingSeconds } = this.props;

    const classes = ["timer"];
    if (remainingSeconds <= 5) {
      classes.push("lessThan5");
    } else if (remainingSeconds <= 10) {
      classes.push("lessThan10");
    }

    return <div className="timer">{this.startTimer()}</div>;
  }
}

export default Timer = StageTimeWrapper(timer);
