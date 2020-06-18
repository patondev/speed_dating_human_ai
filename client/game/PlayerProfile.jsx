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
    const { player } = this.props;

    return (
      <div className="profile-score">
        <h4>Total score</h4>
        <span>{(player.get("cumulativeScore") || 0).toFixed(2)}</span>
      </div>
    );
  }

  renderTracker() {
    const { game, round } = this.props;

    return (
      <div className="profile-rounds">
        <h4>{round.get("case") === "revise" ? "Revise " : "Predict"} Case</h4>
        <span>
          {round.get("practice")
            ? "Practice " + round.get("effectiveIndex")
            : round.get("effectiveIndex") +
              " / " +
              game.treatment.roundCount.toString()}
        </span>
      </div>
    );
  }

  // render() {
  //   const { game, stage, round } = this.props;

  //   return (
  //     <aside className="player-profile">
  //       {this.renderProfile()}
  //       {game.treatment.giveFeedback && round.get("case") === "revise"
  //         ? this.renderScore()
  //         : null}
  //       {this.renderTracker()}
  render() {
    const { game, stage, player, round } = this.props;
    const roundIndex = game.roundIds.indexOf(player.round._id);
    const roundCount = game.roundIds.length;
    return (
      <>
        <div className="value-label">
          <span>CASE</span>{" "}
          {round.get("practice")
            ? "Practice"
            : roundIndex.toString() + " / " + (roundCount - 1).toString()}
        </div>

        <Timer stage={stage} />
        <div className="value-label">
          <span>SCORE</span> {player.get("cumulativeScore").toFixed(2) || 0}
        </div>
      </>
    );
  }
}
