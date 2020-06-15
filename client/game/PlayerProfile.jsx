import React from "react";

import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  render() {
    const { game, stage, player, round } = this.props;
    const roundIndex = game.roundIds.indexOf(player.round._id);
    const roundCount = game.roundIds.length;
    return (
      <>
        <div className="value-label">
          <span>CASE</span>{" "}
          {round.get("practice")
            ? "1/10" // Will change with Practice
            : roundIndex.toString() + " / " + (roundCount - 1).toString()}
        </div>

        <Timer stage={stage} />
        <div className="value-label">
          <span>SCORE</span> {Math.round(player.get("cumulativeScore")) || 0}
        </div>
      </>
    );
    // renderProfile() {
    //   const { player } = this.props;
    //   return (
    //     <div className="profile-score">
    //       <h3>Your Profile</h3>
    //       <img src={player.get("avatar")} className="profile-avatar" />
    //     </div>
    //   );
    // }

    // renderScore() {
    //   const { player } = this.props;

    //   return (
    //     <div className="profile-score">
    //       <h4>Total score</h4>
    //       <span>{(player.get("cumulativeScore") || 0).toFixed(2)}</span>
    //     </div>
    //   );
    // }

    // renderTracker() {
    //   const { player, game, round } = this.props;
    //   let roundIndex = game.roundIds.indexOf(player.round._id);
    //   let roundCount = game.roundIds.length;

    //   return (
    //     <div className="profile-rounds">
    //       <h4>Case</h4>
    //       <span>
    //         {round.get("practice")
    //           ? "Practice"
    //           : roundIndex.toString() + " / " + (roundCount - 1).toString()}
    //       </span>
    //     </div>
    //   );
    // }

    // return (
    //   <aside className="player-profile">
    //     {this.renderProfile()}
    //     {game.treatment.giveFeedback ? this.renderScore() : null}
    //     {this.renderTracker()}
    //     <Timer stage={stage} />
    //   </aside>
    // );
  }
}
