import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> Game overview </h1>
          <p>
            <strong>
              What influences love at first sight? (Or, at least, love in the
              first four minutes?)
            </strong>
          </p>

          <p>
            You are going to play a mini-game that predicts whether or not women
            participants will match their male partners in a speed dating event.
            During the event, women attendees had a four-minute "first date"
            with every other man participant. At the end of their four minutes,
            participants were asked if they would like to see their date again.
            A total of 2,080 dates were collected, half of which, or 1,040
            cases, were matched, but the other half, 1,040 cases, failed to
            match. They were also asked to rate their date on six attributes:
            Attractiveness, Sincerity, Intelligence, Fun, Ambition, and Shared
            Interests.
          </p>

          <p>
            The mini-game
            <strong>
              {" will take about "}
              {(game.treatment.roundCount *
                (game.treatment.stageLength +
                  (game.treatment.socialStageLength
                    ? game.treatment.socialStageLength
                    : 0))) /
                120.0}
              {" minutes "}
            </strong>
            in total
            {""}
            {game.treatment.playerCount > 1
              ? " and consist of two steps. "
              : "."}
          </p>

          <p>
            {game.treatment.playerCount > 1 ? " In step 1, y" : "Y"}
            ou will be asked to guess whether or not a couple will want to date
            again given the demographics of participants and their ratings of
            each other. To be more specific,{" "}
            <strong>
              you will predict the probability the success/failure of{" "}
              {game.treatment.roundCount} different dates.
            </strong>
          </p>

          {game.treatment.playerCount > 1 ? (
            <p>
              In step 2, you will be provided with predictions of an A.I. system
              for the same cases you reviewed in step 1. In this step, you can
              decide whether or not to modify the predictions made in step 1. If
              you do not want to modify your previous forecast, please submit
              the same results as in step 1.
            </p>
          ) : null}

          <p>
            At the end of the experiment, you will get points based on the
            accuracy of your final predictions (i.e., after you have received
            the AI recommendation).
          </p>

          <p>
            <span style={{ color: "red" }}>
              <strong>
                For this score, the further the distance between the true answer
                and your prediction goes, the greater the penalty. And, the
                lower the score, the better your prediction is
              </strong>
              .
            </span>
          </p>

          <p>
            Now let's take part in the game, get high scores, and beat other
            players and even A.I.
          </p>

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
