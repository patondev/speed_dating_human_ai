import React from "react";

export default class TaskStimulus extends React.Component {
  renderFeatureRow(pairData, feature, display = null) {
    const partnerFeature = feature + "_Partner";
    const displayName = display ? display : feature;
    return (
      <tr>
        <th className="color-female">{displayName}</th>
        <td>{pairData[feature]}</td>
        <th className="color-male">{displayName}</th>
        <td>{pairData[partnerFeature]}</td>
      </tr>
    );
  }

  render() {
    const { round, stage, player, game } = this.props;
    const pairData = round.data.features;

    const revealBots = game.treatment.revealBots || false;

    return (
      <div className="task-stimulus">
        {!stage.get("practice") ? <h3 className="bp3-heading">{stage.get("questionText")}</h3> : ""}

        <div className="task-table">
          <table>
            <tbody>
              <tr>
                <th>Matching ID</th>
                <td>{round.data._id}</td>
                <th>Interests Correlation</th>
                <td>{pairData.InterestsCorr}</td>
              </tr>
              <tr>
                <th className="color-female" colSpan="2">Woman</th>
                <th className="color-male" colSpan="2">Man</th>
              </tr>
              {this.renderFeatureRow(pairData, "Race")}
              {this.renderFeatureRow(pairData, "Age")}
              {this.renderFeatureRow(pairData, "Attractive")}
              {this.renderFeatureRow(pairData, "Sincere")}
              {this.renderFeatureRow(pairData, "Intelligent")}
              {this.renderFeatureRow(pairData, "Fun")}
              {this.renderFeatureRow(pairData, "Ambitious")}
              {this.renderFeatureRow(
                pairData,
                "SharedInterests",
                "Shared Interests"
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
