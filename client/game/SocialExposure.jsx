import React from "react";
import Slider from "meteor/empirica:slider";

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
            value={value}
            disabled
            hideHandleOnEmpty
          />
        </div>
      </div>
    );
  }

  render() {
    const { game, player, stage, round } = this.props;

    const imgPath =
      stage.get("interpretationType") === "Global"
        ? round.get("model_global_explination")
        : stage.get("interpretationType") === "Local"
          ? round.get("model_local_explination")
          : null;

    const otherPlayers = _.reject(game.players, p => p._id === player._id);
    if (otherPlayers.length === 0) {
      return null;
    }

    return (
      <div className="social-exposure">
        <p>
          <strong>There are {otherPlayers.length} other players:</strong>
        </p>
        {otherPlayers.map(p => this.renderSocialInteraction(p))}
        <div className="explanation">
          {imgPath ? <img src={imgPath} alt={imgPath} /> : null}
        </div>
      </div>
    );
  }
}
