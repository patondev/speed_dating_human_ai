import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions - Feedback Round </h1>

          <p>
            Now we give feedback on how your guess compares to the actual outcome
            and the guess of the {game.treatment.revealBots ? "A.I." : "other player"}.
          </p>

          <p>
            The score displayed is calculated based on the Brier score function
            to determine the accuracy of probabilistic predictions. The score is
            1 - the difference between the actual outcome (1 for match, 0 for no match)
            and the prediction, squared.
          </p>

          <img className="small-sample-img" src="/feedbacksample.png" />

          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
