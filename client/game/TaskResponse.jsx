import React from "react";
import Slider from "meteor/empirica:slider";
import { Toaster, Position } from "@blueprintjs/core";
import { StageTimeWrapper } from "meteor/empirica:core";
import { Button } from "@blueprintjs/core";

const WarningToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP
});

//timed button
const TimedButton = StageTimeWrapper(props => {
  const { onClick, activateAt, remainingSeconds, stage } = props;

  const disabled = remainingSeconds > activateAt;
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      intent={disabled ? "danger" : "primary"}
      small={false}
      type={"button"}
      fill={true}
    >
      {disabled
        ? "Wait for " +
          Math.abs(remainingSeconds - activateAt) +
          "s at least before submitting"
        : stage.name === "outcome"
          ? "Next"
          : "Submit"}
    </Button>
  );
});

export default class TaskResponse extends React.Component {
  handleChange = num => {
    const { player } = this.props;
    const prediction = Math.round(num * 100) / 100;
    player.round.set("prediction", prediction);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { player, stage } = this.props;
    const prediction = player.round.get("prediction");

    if (stage.name === "outcome" || stage.name === "outcome") {
      player.stage.submit();
      return;
    }
    if (prediction === null) {
      WarningToaster.show({ message: "Please make a prediction first." });
    } else {
      player.round.set("prediction", prediction);
      player.stage.submit();
      return;
    }
  };

  renderSubmitted() {
    return (
      <div className="task-response">
        <div className="response-submitted">
          <h5>Waiting on other players...</h5>
          Please wait until all players are ready
        </div>
      </div>
    );
  }

  renderSlider() {
    const { player, stage } = this.props;
    let prediction = player.round.get("prediction");

    const isOutcome =
      stage.name === "outcome" || stage.name === "practice-outcome";
    return (
      <Slider
        className="task-response-slider"
        min={0}
        max={1}
        stepSize={0.01}
        labelStepSize={0.25}
        onChange={this.handleChange}
        value={isOutcome ? player.round.get("prediction") : prediction}
        disabled={isOutcome}
        hideHandleOnEmpty
        labelRenderer={number => {
          if (number === 0) {
            return "0.00 \n\n Extremely \n unlikely";
          } else if (number === 0.25) {
            return "0.25 \n\n Somewhat \n unlikely";
          } else if (number === 0.5) {
            return "0.50 \n\n Neither likely \n nor unlikely";
          } else if (number === 0.75) {
            return "0.75 \n\n Somewhat \n likely";
          } else if (number === 1) {
            return "1.00 \n Extremely \n likely";
          } else {
            return number.toString();
          }
        }}
      />
    );
  }

  render() {
    const { player, stage } = this.props;

    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    return (
      <div className="task-response">
        <p>
          <strong>Make your prediction:</strong>
        </p>

        {stage.get("practice") ? (
          <p>
            <strong style={{ color: "blue" }}>
              This is a practice round and your response will not count.
            </strong>
          </p>
        ) : (
          ""
        )}

        <form>
          {this.renderSlider()}
          <TimedButton
            stage={stage}
            player={player}
            activateAt={50}
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}
