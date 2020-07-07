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

  render() {
    const { stage } = this.props;
    return (
      <>
        <SlidersPrediction disabled={true} {...this.props} />
        {stage.get("interpretationType") !== "None" && (
          <BodyDescription
            isGlobal={stage.get("interpretationType") === "Global"}
          />
        )}
        {stage.get("interpretationType") === "Global" ? (
          <GlobalBars {...this.props} />
        ) : stage.get("interpretationType") === "Local" ? (
          <LocalBars {...this.props} />
        ) : null}
      </>
    );
  }
}
