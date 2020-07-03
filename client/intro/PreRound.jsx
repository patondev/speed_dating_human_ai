import React from "react";

import { Centered } from "meteor/empirica:core";

export default class PreRound extends React.Component {
  render() {
    const { onNext, step = 1 } = this.props;

    return (
      <Centered className="with-topper">
        <div className="instructions">
          {step === 1 && (
            <h1 className={"bp3-heading"}>Instructions (Part 1)</h1>
          )}
          <p className="p-pre-round">
            Now you are moving on to step {step} of this game. The first two
            cases are practice cases so you can see what the game is like. These
            will be followed by the ten actual cases for step {step} of this
            game.
          </p>

          <p>
            <button
              type="button"
              onClick={onNext}
              className="btn-prediction-big"
            >
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
