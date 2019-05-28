import React from "react";
import Slider from "meteor/empirica:slider";

export default class AIExposure extends React.Component {
  renderAIInteraction(modelData) {
    const prediction = modelData.model_prediction_prob;
    return (
      <div className="alter" key="ai">
        <div className="range">
          <Slider
            min={0}
            max={1}
            stepSize={0.01}
            value={prediction}
            disabled
            hideHandleOnEmpty
          />
        </div>
      </div>
    );
  }

  render() {
    const { round, stage } = this.props;

    const imgPath =
      stage.get("interpretationType") === "Global"
        ? round.get("model_global_explination")
        : stage.get("interpretationType") === "Local"
          ? round.get("model_local_explination")
          : null;

    return (
      <div className="social-exposure">
        <p>
          <strong>The Artificial Intelligence prediction:</strong>
        </p>
        {this.renderAIInteraction(round.data)}

        {imgPath ? <img src={imgPath} alt={imgPath} /> : null}
      </div>
    );
  }
}
