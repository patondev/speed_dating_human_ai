import React from "react";
import Slider from "meteor/empirica:slider";

import SlidersPrediction from "./component/Slider";
import BodyDescription from "./ContentRight/BodyDescription";
import LocalBars from "./ContentRight/LocalBars";
import GlobalBars from "./ContentRight/GlobalBars";

export default class SocialExposure extends React.Component {
  renderSocialInteraction(otherPlayer) {
    const value = otherPlayer.round.get("value");
    return (
      <div className="alter" key={otherPlayer._id}>
        <img src={otherPlayer.get("avatar")} className="profile-avatar" />
        <div className="range">
          <Slider
            min={0}
            max={1}
            stepSize={0.01}
            labelStepSize={0.25}
            value={value}
            disabled
            hideHandleOnEmpty
          />
        </div>
      </div>
    );
  }

  renderSlider() {
    const { player, round, stage } = this.props;
    let prediction = player.round.get("prediction");
    if (prediction === null || prediction === undefined) {
      prediction = 0.5;
    }
    const predictionProb =
      round.get("model_prediction_prob") ||
      round.get("task").model_prediction_prob;

    const effectiveIndex = round.get("effectiveIndex");

    const isSolo = stage.get("type") === "solo";
    const isSocial = stage.get("type") === "social";
    const initialPrediction = player.get(`prediction-${effectiveIndex}`);
    const isOutcome =
      stage.name === "outcome" || stage.name === "practice-outcome";
    stage.name === "outcome" || stage.name === "practice-outcome";
    const aiPrediction = (!isSolo && predictionProb) || null;
    // const userPrediction = (isSocial && initialPrediction) || null;
    // const userFinalPrediction = (isOutcome && prediction) || null;

    const userPrediction =
      isSocial && initialPrediction !== null && initialPrediction !== undefined
        ? initialPrediction
        : null;
    const userFinalPrediction =
      isOutcome && prediction !== null && prediction !== undefined
        ? prediction
        : null;

    return (
      <SlidersPrediction
        value={prediction}
        newPrediction={false}
        aiPrediction={aiPrediction}
        userPrediction={userPrediction}
        userFinalPrediction={userFinalPrediction}
        disabled={true}
      />
    );
  }

  render() {
    const { stage } = this.props;

    return (
      <>
        {this.renderSlider()}
        {
          <BodyDescription
            isGlobal={stage.get("interpretationType") === "Global"}
          />
        }
        {stage.get("interpretationType") === "Global" ? (
          <GlobalBars {...this.props} />
        ) : (
          <LocalBars {...this.props} />
        )}
      </>
    );
  }
}
