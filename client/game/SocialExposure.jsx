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
    const { game, player, stage, round } = this.props;

    const imgPath =
      stage.get("interpretationType") === "Global"
        ? round.get("model_global_explination")
        : stage.get("interpretationType") === "Local"
          ? stage.name === "practice"
          : round.data.practiceData.model_local_explination
          ? round.get("model_local_explination")
          : null;

    const otherPlayers = _.reject(game.players, p => p._id === player._id);
    if (otherPlayers.length === 0) {
      return null;
    }
    const bots = game.players.filter(p => p.bot);
    const revealBots = game.treatment.revealBots || false;

    return (
      <div className="social-exposure">
        <p>
          <strong>
            There {otherPlayers.length > 1
              ? "are "
              : "is "}
            {otherPlayers.length} other {bots.length > 0 && revealBots
              ? "bot"
              : "player"}
            {otherPlayers.length > 1
              ? "s:"
              : ":"}
          </strong>
        </p>
        {otherPlayers.map(p => this.renderSocialInteraction(p))}
        {imgPath ?
          <div className="explanation">
            <p><strong>Feature importance for match prediction: </strong></p>
            <img src={imgPath} alt={imgPath} />
          </div>
        : null}
      </div>
    );
  }
}
