import React from "react";

export default class BodyRight extends React.Component {
  renderLines = () => {
    const Line = ({ left }) => {
      return <div className="line" style={{ left: `${left}%` }}></div>;
    };
    return Array(10)
      .fill(null)
      .map((el, i) => <Line key={i} left={i * 10} />);
  };

  renderBarTextContent = () => {
    return <div className="bar-text-content"></div>;
  };

  render() {
    const Bar = ({ percent }) => {
      return <div className="bar" style={{ width: `${percent}%` }}></div>;
    };

    return (
      <div className="graph-wrapper">
        <div className="graph">
          {this.renderBarTextContent()}
          <div className="bar-lines-container">
            {this.renderLines()}
            <Bar percent={10} />
            <Bar percent={20} />
            <Bar percent={30} />
          </div>
        </div>
      </div>
    );

    // return (
    //   <div className="bars-prediction">{predictions.map((p) => this.renderBar(maxValue, p))}</div>
    // );
  }
}
