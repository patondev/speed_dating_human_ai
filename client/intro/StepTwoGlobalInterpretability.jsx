import React from "react";

import { Centered } from "meteor/empirica:core";

import TaskStimulus from "../game/TaskStimulus"; //TODO: we should make this work!

export default class StepTwoGlobalInterpretability extends React.Component {
  render() {
    const {
      hasPrev,
      onPrev,
      game: { treatment },
    } = this.props;
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

          <p>
            Along with the AI system’s prediction, you will also receive
            information about how the AI system makes its predictions. The AI
            system was trained on 1,000 dates, and based on this data it
            determined that certain attributes were more important than others
            in whether a couple wants a second date. You will be given the chart
            shown below, which shows how important the AI system considers each
            attribute to be. For example, as indicated in the chart, the AI
            system considers the most important factors to be: Man’s
            Attractiveness, followed by Woman’s Attractiveness, followed by
            Woman’s Fun. This relative importance of factors is not specific to
            any one couple.
          </p>

          <div className="intro-flex mb-25">
            <div className="intro-column-90">
              <img
                src="/step-2-local-ai-prediction.svg"
                alt="AI Prediction step 2 local interpretability"
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
