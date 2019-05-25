import React from "react";
import Slider from "meteor/empirica:slider";
import {
  HTMLTable,
  Intent,
  Checkbox,
  Toaster,
  Position
} from "@blueprintjs/core";

const WarningToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP
});

export default class TaskResponse extends React.Component {
  handleChange = num => {
    const { player } = this.props;
    const value = Math.round(num * 100) / 100;
    player.round.set("value", value);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { player, round } = this.props;
    const value = player.round.get("value");

    if (!value) {
      WarningToaster.show({
        message: "Please enter a response."
      });
    } else {
      const outcome = round.get("model_prediction") === "Yes" ? 1.0 : 0;
      const score = Math.pow(value - outcome, 2);
      player.round.set("score", score);
      player.stage.set("score", score);
      this.props.player.stage.submit();
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
    const value = player.round.get("value");
    const isOutcome = stage.name === "outcome";
    return (
      <Slider
        className="task-response-slider"
        min={0}
        max={1}
        stepSize={0.01}
        labelStepSize={0.25}
        onChange={this.handleChange}
        value={value}
        disabled={isOutcome}
        hideHandleOnEmpty
        labelRenderer={
          (number) => {
            if (number == 0) {
              return "0.00 \n\n Extremely \n unlikely";
            } else if (number == 0.25) {
              return "0.25 \n\n Somewhat \n unlikely";
            } else if (number == 0.5) {
              return "0.50 \n\n Neither likely \n nor unlikely";
            } else if (number == 0.75) {
              return "0.75 \n\n Somewhat \n likely";
            } else {
              return "1.00 \n Extremely \n likely";
            }
          }
        }
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
        <p><strong>Make your prediction:</strong></p>
        <form onSubmit={this.handleSubmit}>
          {this.renderSlider()}
          <button type="submit">
            {stage.name === "outcome" ? "Next" : "Submit"}
          </button>
        </form>
      </div>
    );
  }
}
