import React from "react";

import { Centered } from "meteor/empirica:core";

export default class StepTwoLocalInterpretability extends React.Component {
  render() {
    const {
      hasPrev,
      hasNext,
      onNext,
      onPrev,
      game: {
        treatment: { giveFeedback },
      },
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
            information about how the AI system made that specific prediction.
            The AI system was trained on 1,000 dates, and based on what it
            learned from this data, it is able to look at the information about
            a specific couple and predict whether that couple might want a
            second date. You will be given a chart similar to the one shown
            below, which explains why the AI system made its prediction for that
            specific couple. As shown in the chart, some factors improved a
            couple’s chances of having a second date, while others hurt the
            couples chances of having a second date. For the couple in this
            example, the Woman’s Attractiveness score most significantly
            improved the couple’s chances of having a second date, while the
            Man’s Attractiveness score most significantly hurt their chances of
            having a second date.
          </p>

          <div className="intro-flex mb-25 jc-center">
            <div className="intro-column-90">
              <img
                src="/step-2-local-ai-prediction.svg"
                alt="AI Prediction step 2 local interpretability"
                className="img-centered"
              />
            </div>
          </div>

          {giveFeedback && (
            <>
              <p>
                After you make your prediction, you will be provided with the
                actual outcome of the date (whether the couple did or did not go
                on a second date). Specifically, you will be shown a slider
                scale like the one you made your predictions on, which will
                provide you with your prediction, the prediction of the AI
                system and the actual outcome. An example of this is shown
                below.
              </p>

              <div className="intro-flex mb-25 jc-center">
                <div className="intro-column-90">
                  <img
                    src="/step-2-feedback-green.svg"
                    alt="AI Prediction step 2 global interpretability feedback"
                    className="img-centered"
                  />
                </div>
              </div>

              <p>
                If the outcome is that they had a second date, predictions
                closer to 100% are more accurate, while if the outcome is that
                they did not have a second date, predictions closer to 0% are
                more correct. Based on how far your final prediction was from
                the actual outcome, your error, penalty, and score are
                calculated, as shown above. The closer your final prediction was
                to the actual outcome, the higher your score will be, and the
                more money you will earn.
              </p>
            </>
          )}

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