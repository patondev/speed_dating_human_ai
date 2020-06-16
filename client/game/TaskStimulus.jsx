import React from "react";

const gender = {
  Woman: "female",
  Man: "male",
};
const PersonCard = ({ pairData, isPartner }) => {
  const suffix = isPartner ? "_Partner" : "";
  const classPartner = !isPartner ? " person-right" : "";

  return (
    <div className="person">
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
      <div className="ratings">
        <h3>Ratings</h3>
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
      </div>
    </div>
  );
};

const Interest = ({ data }) => {
  const interestPosition = (InterestsCorr) => {
    return (1 / 2 - InterestsCorr / 2) * 100;
  };
  return (
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
              top: `calc(${interestPosition(data.InterestsCorr)}% - 9px)`,
            }}
          >
            {data.InterestsCorr.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default class TaskStimulus extends React.Component {
  state = { interestValue: 0.08 };

  render() {
    const { round } = this.props;
    const pairData = round.get("features");
    return (
      <div className="couples">
        <PersonCard pairData={pairData} isPartner />

        <Interest data={pairData} />

        <PersonCard pairData={pairData} isPartner />
      </div>
    );
  }
}
