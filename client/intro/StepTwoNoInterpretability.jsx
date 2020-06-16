import React from "react";

import { Centered } from "meteor/empirica:core";

export default class StepTwoNoInterpretability extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> Instructions (Part 2) </h1>

          <p>
            In step 2, you will have the opportunity to modify the predictions
            you made in step 1. You will receive predictions from an Artificial
            Intelligence (AI) system for the same 10 couples you made
            predictions for in step 1. For each couple, you will see a slider
            scale like what is shown below, which has your initial prediction
            from step 1, as well as the AI system’s prediction. You will submit
            your new prediction using this same slider scale. If you do not want
            to modify your initial prediction, you can submit the same value as
            your initial prediction.
          </p>

          <div className="intro-flex mb-25 jc-center">
            <div className="intro-column-90">
              <img
                src="/slider-step-2-local.svg"
                alt="Slider step 2 local interpretability"
                className="img-centered"
              />
            </div>
          </div>

          <p className="action-step">
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
