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
    const prediction = player.round.get("firstPrediction");
    const isSolo = stage.get("type") === "solo";

    const aiPrediction = (!isSolo && round.get("model_prediction_prob")) || null;
    const isPrevious = stage.get("type") === "social";
    return (
      <SlidersPrediction
        value={prediction}
        newPrediction={false}
        aiPrediction={aiPrediction}
        userPrediction={prediction}
        disabled={true}
        isPrevious={isPrevious}
      />
    );
  }

  render() {
    const { stage } = this.props;

    return (
      <>
        {this.renderSlider()}
        {<BodyDescription isGlobal={stage.get("interpretationType") === "Global"} />}
        {stage.get("interpretationType") === "Global" ? (
          <GlobalBars {...this.props} />
        ) : (
          <LocalBars {...this.props} />
        )}
      </>
    );
  }
}
