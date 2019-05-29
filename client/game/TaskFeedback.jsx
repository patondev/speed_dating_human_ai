import React from "react";
import { HTMLTable } from "@blueprintjs/core";

export default class TaskFeedback extends React.Component {
  render() {
    const { game, player, round } = this.props;

    const otherPlayers = _.reject(game.players, p => p._id === player._id);
    const other = otherPlayers.length !== 0 ? otherPlayers[0] : null;
    const otherPlayerFeedback =
      game.treatment.otherPlayerFeedback !== undefined
        ? game.treatment.otherPlayerFeedback
        : true;

    const revealBots = game.treatment.revealBots || false;

    const correct_answer = round.get("correct_answer") === "Yes" ? 1 : 0;
    return (
      <div className="task-feedback">
        <HTMLTable>
          <thead>
            <tr>
              <th />
              <th>Prediction</th>
              <th>Outcome</th>
              <th>Penalty</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>You</th>
              <td align="center">
                {player.round.get("prediction") !== null
                  ? player.round.get("prediction")
                  : "not given"}
              </td>
              <td>
                {round.get("correct_answer") === "Yes"
                  ? "Match (1)"
                  : "No match (0)"}
              </td>
              <td>
                {player.round.get("prediction") !== null
                  ? Math.pow(
                      correct_answer - player.round.get("prediction"),
                      2
                    ).toFixed(2)
                  : 1}
              </td>
              <td>
                <strong>{player.round.get("score").toFixed(2)}</strong>
              </td>
            </tr>
            {other && otherPlayerFeedback ? (
              <tr>
                <th>{revealBots ? "A.I." : "Other Player"}</th>
                <td align="center">
                  {other.round.get("prediction").toFixed(2)}
                </td>
                <td>
                  {round.get("correct_answer") === "Yes"
                    ? "Match (1)"
                    : "No match (0)"}
                </td>
                <td>
                  {player.round.get("prediction") !== null
                    ? Math.pow(
                        correct_answer - other.round.get("prediction"),
                        2
                      ).toFixed(2)
                    : 1}
                </td>
                <td>
                  <strong>{other.round.get("score").toFixed(2)}</strong>
                </td>
              </tr>
            ) : null}
          </tbody>
        </HTMLTable>
      </div>
    );
  }
}
