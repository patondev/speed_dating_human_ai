import React from "react";

export default class TaskStimulus extends React.Component {
  renderFeatureRow(pairData, feature, display = null) {
    const partnerFeature = feature + "_Partner";
    const displayName = display ? display : feature;
    return (
      <tr>
        <th>{"Woman's " + displayName}</th>
        <td>{pairData[feature]}</td>
        <th>{"Man's " + displayName}</th>
        <td>{pairData[partnerFeature]}</td>
        <th>{displayName + " Difference"}</th>
        <td>{pairData[feature] - pairData[partnerFeature]}</td>
      </tr>
    );
  }

  render() {
    const { round, stage, player } = this.props;
    const pairData = round.data.features;
    //console.log(round.data);

    return (
      <div className="task-stimulus">
        <h3 className="bp3-heading">{stage.get("questionText")}</h3>

        <div className="task-table">
          <table>
            <tbody>
              <tr>
                <th>Matching ID</th>
                <td>{round.data._id}</td>
                <th>Interests Correlation</th>
                <td>{pairData.InterestsCorr}</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="table-heading">
                <th colSpan="6">Basic Information</th>
              </tr>
              <tr>
                <th>Woman's Race</th>
                <td>{pairData.Race}</td>
                <th>Man's Race</th>
                <td>{pairData.Race_Partner}</td>
                <th>Same Race</th>
                <td>{pairData.Race === pairData.Race_Partner ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <th>Woman's Age</th>
                <td>{pairData.Age}</td>
                <th>Man's Race</th>
                <td>{pairData.Age_Partner}</td>
                <th>Age Difference</th>
                <td>{pairData.Age - pairData.Age_Partner}</td>
              </tr>
              <tr className="table-heading">
                <th colSpan="6">Evaluation Scores from the Opponent</th>
              </tr>
              {this.renderFeatureRow(pairData, "Attractive")}
              {this.renderFeatureRow(pairData, "Sincere")}
              {this.renderFeatureRow(pairData, "Intelligent")}
              {this.renderFeatureRow(pairData, "Fun")}
              {this.renderFeatureRow(pairData, "Ambitious")}
              {this.renderFeatureRow(pairData, "SharedInterests", "Shared Interests")}
            </tbody>
          </table>
        </div>

        <p>
          <strong>Interest Correlation</strong>: Correlation between
            participant’s and partner’s ratings of interests surveyed
            prior to the speed dating.
        </p>
      </div>

    );
  }
}
