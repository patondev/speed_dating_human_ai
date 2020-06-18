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
            ? "Practice " + round.get("effectiveIndex")
            : round.get("effectiveIndex") +
              " / " +
              game.treatment.roundCount.toString()}
        </div>

        <Timer stage={stage} />
        <div className="value-label">
          <span>SCORE</span> {(player.get("cumulativeScore") || 0).toFixed(2)}
        </div>
      </>
    );
  }
}
