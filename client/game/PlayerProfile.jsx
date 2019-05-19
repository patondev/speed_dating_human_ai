import React from "react";

import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  renderProfile() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <h3>Your Profile</h3>
        <img src={player.get("avatar")} className="profile-avatar" />
      </div>
    );
  }

  renderScore() {
    const { player, stage } = this.props;

    const prevScore = player.get("score") || 0;
    const score = stage.get("type") === "feedback"
      ? prevScore + (1 - player.round.get("score"))
      : prevScore;

    return (
      <div className="profile-score">
        <h4>Total score</h4>
        <span>{score.toFixed(2)}</span>
      </div>
    );
  }

  renderTracker() {
    const { player, game } = this.props;
    var roundIndex = game.roundIds.indexOf(player.round._id);
    var roundCount = game.roundIds.length;

    return (
      <div className="profile-rounds">
        <h4>Case</h4>
        <span>{(roundIndex + 1).toString() + " / " + roundCount.toString()}</span>
      </div>
    );
  }

  render() {
    const { game, stage } = this.props;

    return (
      <aside className="player-profile">
        {this.renderProfile()}
        {this.renderTracker()}
        <Timer stage={stage} />
      </aside>
    );
  }
}
