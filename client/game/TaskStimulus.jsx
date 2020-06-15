import React from "react";

const gender = {
  Woman: "female",
  Man: "male",
};
const PersonCard = ({ pairData, isPartner }) => {
  const suffix = isPartner ? "_Partner" : "";
  const classPartner = !isPartner ? " person-right" : "";
  return (
    <header className={`person-card${classPartner}`}>
      <div className="person-thumb">
        <img
          src={`/${gender[pairData["Gender" + suffix]]}.svg`}
          alt={`Person ${pairData["Gender" + suffix]}`}
        />
      </div>
      <div className="person-detail">
        <div className="gender">{gender[pairData["Gender" + suffix]]}</div>
        <div className="age">{pairData["Age" + suffix]} years,</div>
        <div className="origin">{pairData["Race" + suffix]}</div>
      </div>
    </header>
  );
};
const RenderFeatureRow = ({ pairData, isPartner }) => {
  const suffix = isPartner ? "_Partner" : "";
  return (
    <table>
      <tbody>
        <tr>
          <td>Attractiveness</td>
          <td>{pairData["Attractive" + suffix]}</td>
        </tr>
        <tr>
          <td>Sincerity</td>
          <td>{pairData["Sincere" + suffix]}</td>
        </tr>
        <tr>
          <td>Shared interest</td>
          <td>{pairData["SharedInterests" + suffix]}</td>
        </tr>
        <tr>
          <td>Intelligence</td>
          <td>{pairData["Intelligent" + suffix]}</td>
        </tr>
        <tr>
          <td>Ambitious</td>
          <td>{pairData["Sincere" + suffix]}</td>
        </tr>
        <tr>
          <td>Fun</td>
          <td>{pairData["Fun" + suffix]}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default class TaskStimulus extends React.Component {
  state = { interestValue: 0.08 };

  interestPosition = (InterestsCorr) => {
    return (1 / 2 - InterestsCorr / 2) * 100;
  };

  render() {
    const { round } = this.props;
    const pairData = round.get("features");
    return (
      <div className="couples">
        <div className="person">
          <PersonCard pairData={pairData} isPartner />
          <div className="ratings">
            <h3>Ratings</h3>
            <RenderFeatureRow pairData={pairData} isPartner />
          </div>
        </div>

        <div className="interests">
          <h4 className="title">Interest correlation</h4>
          <div className="interest-component">
            <div className="interest-bar">
              <div className="interest-measurements">
                <div className="interest-measurement">1</div>
                <div className="interest-measurement">0</div>
                <div className="interest-measurement">-1</div>
              </div>
              <div className="interest-gradient"></div>
              <div
                className="interest-marker"
                style={{
                  top: `calc(${this.interestPosition(
                    pairData.InterestsCorr
                  )}% - 9px)`,
                }}
              >
                {pairData.InterestsCorr.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <div className="person">
          <PersonCard pairData={pairData} />
          <div className="ratings ratings-right">
            <h3>Ratings</h3>
            <RenderFeatureRow pairData={pairData} />
          </div>
        </div>
      </div>
    );
  }
}
