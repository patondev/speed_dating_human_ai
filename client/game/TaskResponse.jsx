import React from "react";
// import Slider from "meteor/empirica:slider";
import Slider from "./component/Slider";
import { Toaster, Position } from "@blueprintjs/core";
import { StageTimeWrapper } from "meteor/empirica:core";
// import { Button } from "@blueprintjs/core";

const WarningToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP,
});

//timed button
const TimedButton = StageTimeWrapper((props) => {
  const { onClick, activateAt, remainingSeconds, stage } = props;

  const disabled = remainingSeconds > activateAt;
  return (
    <button
      type="button"
      className="btn-prediction-big"
      onClick={onClick}
      disabled={disabled}
    >
      {disabled
        ? "Wait for " + Math.abs(remainingSeconds - activateAt) + "s"
        : stage.name === "outcome"
        ? "Next"
        : "Submit Prediction"}
    </button>
  );
});

export default class TaskResponse extends React.Component {
  handleChange = (num) => {
    const { player, stage } = this.props;
    const prediction = Math.round(num * 100) / 100;
    const isSolo = stage.get("type") === "solo";
    player.stage.set("prediction", prediction);
    if (isSolo) {
      player.stage.set("firstPrediction", prediction);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { player, stage } = this.props;
    const prediction = player.stage.get("prediction");
    const isSolo = stage.get("type") === "solo";

    if (stage.name === "outcome" || stage.name === "outcome") {
      player.stage.submit();
      return;
    }
    if (prediction === null || prediction === undefined) {
      WarningToaster.show({ message: "Please make a prediction first." });
    } else {
      player.round.set("prediction", prediction);
      player.stage.set("prediction", prediction);
      if (isSolo) {
        player.stage.set("firstPrediction", prediction);
        player.round.set("firstPrediction", prediction);
      }
      player.stage.submit();
      return;
    }
  };

  renderSlider() {
    const { player, round, stage } = this.props;
    let prediction = player.stage.get("prediction");
    if (prediction === null || prediction === undefined) {
      prediction = 0.5;
    }
    const isSolo = stage.get("type") === "solo";
    const isSocial = stage.get("type") === "social";
    const isOutcome =
      stage.name === "outcome" || stage.name === "practice-outcome";

    const indicateNewPrediction = stage.get("type") === "social";
    stage.name === "outcome" || stage.name === "practice-outcome";
    const aiPrediction =
      (!isSolo && round.get("model_prediction_prob")) || null;
    const userPrediction =
      (isSocial && player.stage.get("firstPrediction")) || null;
    const userFinalPrediction = (isOutcome && prediction) || null;

    return (
      <Slider
        value={prediction}
        onSlideChange={this.handleChange}
        newPrediction={indicateNewPrediction}
        aiPrediction={aiPrediction}
        userPrediction={userPrediction}
        userFinalPrediction={userFinalPrediction}
        disabled={isOutcome}
      />
    );
  }

  renderResult() {
    const { player, round, stage } = this.props;
    const correct_answer = round.get("correct_answer") === "Yes" ? 1 : 0;
    if (stage.name === "outcome" || stage.name === "practice-outcome") {
      return (
        <div className="result">
          {correct_answer === 1 ? (
            <div className="alert">
              <div className="alert-content">
                <strong>Outcome</strong> The couple goes on a Second Date
              </div>
            </div>
          ) : (
            <div className="alert alert-error">
              <div className="alert-content">
                <strong>Outcome</strong> The couple didn’t get a Second Date
              </div>
            </div>
          )}
          <div className="result-score">
            <div className="result-item">
              <div className="result-entry label">Error</div>
              <div className="result-entry value">
                {player.round.get("prediction") !== null
                  ? Math.abs(
                      correct_answer - player.round.get("prediction")
                    ).toFixed(2)
                  : 1}
              </div>
            </div>
            <div className="result-item">
              <div className="result-entry label">Penalty</div>
              <div className="result-entry value">
                {player.round.get("prediction") !== null
                  ? Math.pow(
                      correct_answer - player.round.get("prediction"),
                      2
                    ).toFixed(2)
                  : 1}
              </div>
            </div>
            <div className="result-item last-item">
              <div className="result-entry label">Score</div>
              <div className="result-entry value">
                {player.round.get("score").toFixed(2) || 0}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  renderSubmitted() {
    const { player, stage } = this.props;
    return (
      <div className="response">
        {this.renderSlider()}
        <TimedButton
          stage={stage}
          player={player}
          activateAt={48}
          onClick={this.handleSubmit}
        />
      </div>
    );
  }

  render() {
    const { player, stage } = this.props;

    const isOutcome =
      stage.name === "outcome" || stage.name === "practice-outcome";

    // If the player already submitted, disabled the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    return (
      <div className="response">
        {!isOutcome && <h3>{stage.get("questionText")}</h3>}
        {this.renderSlider()}
        {this.renderResult()}
        <TimedButton
          stage={stage}
          player={player}
          activateAt={120}
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}
